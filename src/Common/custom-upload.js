import React, { useState } from "react";
import { Upload, message,Icon } from "antd";
import S3 from "react-aws-s3";

const CustomUpload = (props) => {
  const [filedata, setfiledata] = useState();
  const {
    setUploadstate,
    setspin,
    accept,
    fileList,
    uploadkey,
    email,
    uploadfrom,
    listType,
    className,
    name,
    setEditUserResopnse,
    profileImageupdate,
    Dynamic,
    setcurrentfile,
    setAddCertifile,uploaddata,
    setImage
  } = props ?? {};
  /** Mandate feilds
   * filePath = path of the uploded file
   * UploadType = its a key to segrigate the type of upload (if let say if user upload image in Lisiting then mention 'Listing')
   * fileData = data of the user selected file
   * UserId = to which we need to add this image to
   */

  const hostid = localStorage.getItem("Hostid");
  const handleupload = (info, key) => {
    console.log("info",info)
    if (Dynamic) {
      if (key === "AddCertifile") {
        setspin((prevState) => ({
          ...prevState,
          currentfile: true,
        }));
      } else {
        setspin((prevState) => ({
          ...prevState,
          updatefile: true,
        }));
      }
      setcurrentfile(key);
    } else {
      setspin((prevState) => ({
        ...prevState,
        [key]: true,
      }));
    }
    if (filedata && filedata.size <= 5000000) {
      const newFileName = filedata?.name.replace(/\..+$/, "");
      const config = {
        bucketName: "ub-dev-image-uploader",
        dirName: hostid || email /* optional */,
        region: "ap-south-1",
        accessKeyId: "AKIAUCJ3HQRT2EX5ETET",
        secretAccessKey: "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",
      };

      let mediaFileName = uploadfrom;
      const ReactS3Client = new S3(config);
      ReactS3Client.uploadFile(filedata, newFileName, mediaFileName).then(
        (data) => {
          console.log("data", data);
          if (data.status === 204) {
            if (props.support){
              setUploadstate((prevState) => ({
                ...prevState,
                imgUrls: [...prevState.imgUrls,data.location],
              }));
            }
           else if (Dynamic) {
              if (key === "AddCertifile") {
                setAddCertifile(data.location);
                setspin((prevState) => ({
                  ...prevState,
                  currentfile: false,
                }));
                setcurrentfile();
              } else {

                console.log("setcurrentfile",)
                let newArr = { ...uploaddata };
                newArr.Certifications[key] = data.location;
                setUploadstate(newArr);
                setspin((prevState) => ({
                  ...prevState,
                  updatefile: false,
                }));
                setcurrentfile();
              }
            } else{
              setUploadstate((prevState) => ({
                ...prevState,
                [key]: data.location,
              }));
              if(setEditUserResopnse){
                setEditUserResopnse((prevState) => ({
                  ...prevState,
                  [key]: data.location,
                }));
              }
              if(profileImageupdate){
                const imagedata = {
                  [key]: data.location,
                }
                profileImageupdate(imagedata, data.location)
                }
              setspin((prevState) => ({
                ...prevState,
                [key]: false,
              }));
            }
         
          }
        }
      );
    } else {
      setspin((prevState) => ({
        ...prevState,
        [key]: false,
      }));
      // return message.error(
      //   `${filedata.name} is too large Maximum file size is 5MB`
      // );
    }
  };
  const fileUploadRequest = ({ file }) => {
    setfiledata(file);
  };

  return (
    <Upload
      customRequest={fileUploadRequest}
      name={name}
      listType={listType}
      className={className}
      accept={accept}
      onChange={(e) => handleupload(e, uploadkey)}
    >
      {listType && props.children}

      {!listType && (
       <Icon className="UPLOAD" type="cloud-upload" />
      )}
    </Upload>
  );
};

export default CustomUpload;
