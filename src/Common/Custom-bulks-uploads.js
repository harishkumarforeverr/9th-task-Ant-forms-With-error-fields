import React, { useState } from "react";
import { Upload, message,Icon } from "antd";
import S3 from "react-aws-s3";
import { withTranslation } from "react-i18next";

const  CustomBulkUpload= (props) => {
  const [filedata, setfiledata] = useState();
  const {
    t,
    setUploadstate,
    setspin,
    accept,
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
    setAddCertifile,uploaddata
  } = props ?? {};
  /** Mandate feilds
   * filePath = path of the uploded file
   * UploadType = its a key to segrigate the type of upload (if let say if user upload image in Lisiting then mention 'Listing')
   * fileData = data of the user selected file
   * UserId = to which we need to add this image to
   */

  const hostid = localStorage.getItem("Hostid");
  const handleupload = (info, key) => {
    if (Dynamic) {
      if (key === "url") {
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
      //   let timeValue = Date.now || function () {
      //     return +new Date;
      // };
      let mediaFileName = uploadfrom;
      const ReactS3Client = new S3(config);
      ReactS3Client.uploadFile(filedata, newFileName, mediaFileName).then(
        (data) => {
          console.log("data", data);
          if (data.status === 204) {


            if (Dynamic) {
              if (key === "url") {
                setUploadstate(prevState=>({
                ...prevState,[key]:data.location
                }));
                setspin((prevState) => ({
                  ...prevState,
                  currentfile: false,
                }));
                setcurrentfile();
              } else {

                console.log("setcurrentfile",)
                // let newArr = { ...uploaddata };
                uploaddata[key].url = data.location;
                setUploadstate(uploaddata);
                setspin((prevState) => ({
                  ...prevState,
                  updatefile: false,
                }));
                setcurrentfile();
              }
            } 
          }
        }
      );
    } else {
      setspin((prevState) => ({
        ...prevState,
        [key]: false,
      }));
      return message.error(
        `${filedata.name} ${t("Common.UploadSize")}`
      );
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

export default withTranslation()(CustomBulkUpload);
