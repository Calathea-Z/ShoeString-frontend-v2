import React, { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { FaCameraRetro } from 'react-icons/fa';

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    // const captionRef = useRef(null);
    // const latRef = useRef(null);
    // const longRef = useRef(null);
    const [fullPostData, setFullPostData] = useState({
        username: '',
        body: '',
        tags: '',
        img: '',
        long: null,
        lat: null,
        likes: null,
    })
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);

    const uploadPost = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("file", selectedFile)
        data.append("upload_preset", "shoe_string")
        data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)
    
        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dcqoiu7bp/image/upload", {
                method: "POST",
                body: data,
            });
            const json = await res.json();
            console.log(json);
            setFullPostData({ ...fullPostData, img: json.url });
            console.log(fullPostData);
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        console.log(fullPostData)
        const userInput = {...fullPostData}
        userInput[e.target.name] = e.target.value
        console.log(userInput)
        setSelectedFile(userInput)
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };
return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}>
            <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                <Transition.Child as={Fragment} enter='ease-out duration-300'    enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
                    <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'/>
                </Transition.Child>

                <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                    &#8203;
                </span>

                <Transition.Child as={Fragment} enter='ease-out duration-300'    enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95' enterTo='opacity-100 translate-y-0 sm:scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 translate-y-0 sm:scale-100' leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                    <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                        <div>
                            {selectedFile ? (
                                <img src={selectedFile} alt='' onClick={()=> setSelectedFile(null)} className='w-full object-contain cursor-pointer' />
                            ) : (
                            <div 
                            onClick={()=> filePickerRef.current.click()}
                            className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 cursor-pointer'
                            >
                                <FaCameraRetro className='h-6 w-6 text-purple-600' aria-hidden='true'/>
                            </div>
                            )}
                        <div>
                            <div className='mt-3 text-center sm:mt-5'>
                                <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                                    Upload A Photo
                                </Dialog.Title>
                                <div>  
                                    <input
                                    ref={filePickerRef} 
                                    type='file' 
                                    hidden
                                    onChange={addImageToPost}
                                    />
                                </div>

                                <div className='mt-2'>
                                    <input className='border-none focus: ring-0 w-full text-center' type='text'
                                    // ref={captionRef}
                                    placeholder='...your thoughts go here'
                                    value={fullPostData.body}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className='flex'>
                                    <div className='mt-2'>
                                        <input className='border-none focus: ring-0 w-full text-center' type='number'
                                        // ref={latRef}
                                        id='lat'
                                        name='lat'
                                        placeholder='latitude'
                                        value={fullPostData.lat}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className='mt-2'>
                                        <input className='border-none focus: ring-0 w-full text-center' type='number'
                                        // ref={longRef}
                                        id='long'
                                        name='long'
                                        placeholder='longitude'
                                        value={fullPostData.long}
                                        onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5 sm:mt-6'>
                            <button type='button' className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled-bg-gray-300'
                            onClick={uploadPost}
                            >
                                Add A Post
                            </button>
                        </div>

                    </div>
                </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>
)
}

export default Modal