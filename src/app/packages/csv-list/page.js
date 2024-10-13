'use client'

import Link from "next/link";
import {useState} from "react";
import {getFile} from "csv-list";





export default function CsvPage() {

    const [file,setFile] = useState(null)



    const handleDrop = (e,  source) => {
        e.preventDefault();

        let dataSource;

        if (source === "drop") {
            dataSource = e.dataTransfer.files;
        } else {
            dataSource = e.target.files;
        }

        for (const file of dataSource) {
            if (file.type === "text/csv") {
                getFile(file).then((result) => {
                    setFile(result)
                })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    };


    const handleDownload = () => {
        const csvData = `id,name\n12,John`;

        const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Example.csv";
        link.click();

        window.URL.revokeObjectURL(url);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    return <div className=' bg-blueTheme-background'>
        <div className='container-lg h-screen max-sm:px-4 overflow-hidden'>
          <div className='p-12 max-sm:p-8'>
              <Link href='/packages' className='hover:scale-105 transition'>
                  <img src="/images/playground/builder/whiteArrow.svg" alt=""/>
              </Link>

              <Link href='https://www.npmjs.com/package/csv-list' target='_blank'>
                  <h1 className='text-center m-auto max-sm:mt-24 text-white'>csv-list</h1>
              </Link>

              <div className='flex justify-end mt-12 max-sm:justify-center'>
                  <button onClick={handleDownload}
                          className='text-white text-sm font-medium bg-blue-800 px-4 py-1 rounded-md'>
                      Download Example
                  </button>
              </div>


               <div className='pt-12 flex justify-center'>

                   {
                       file ? <code className='bg-black text-white p-4'>
                           {JSON.stringify(file)}
                       </code> :  <div className='flex items-center bg-white border border-dashed border-[#d2c9ff] rounded-md
                   text-[#a7aebb] flex-col text-sm font-medium justify-center mt-3 transition h-[300px] w-[50%] max-sm:w-full'
                                       onDrop={(e) => handleDrop(e, "drop")}
                                       onDragOver={handleDragOver}>

                        <span className="flex flex-col">
                          Drag & Drop or
                          <label
                              className="text-[#694bff] cursor-pointer pt-2 text-center"
                              htmlFor="selectFile"
                          >
                            Browse files
                            <input
                                id="selectFile"
                                className='hidden left-3 absolute -z-10'
                                type="file"
                                onChange={(e) =>
                                    handleDrop(e,"browse")
                                }
                            />
                          </label>
                        </span>
                       </div>
                   }



                  </div>


          </div>
        </div>
    </div>
}