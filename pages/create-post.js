import React, { useState, useEffect } from "react"

const CreatePost = () => {
    const [open, setOpen] = useState(false)
    const filePickerRef = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)
    const [loading, setLoading] = useState(false)
    const [newForm, setNewForm] = useState({
        username: " ",
        body: " ",
        tags: " ",
        img: " ",
        longitude: "",
        latitude: "",
        likes: " ",
    })

    const uploadImage = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("file", selectedFile)
        data.append("upload_preset", "shoe_string")
        data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)

        fetch("https://api.cloudinary.com/v1_1/dcqoiu7bp/image/upload", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                const imgUrl = { ...newForm, img: data.url }
                setNewForm(imgUrl)
                console.log(newForm)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const uploadPost = async () => {
        if (loading) return
        setLoading(true)

        const data = new FormData()
        data.append("file", selectedFile)
        data.append("upload_preset", "shoe_string")
        data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)

        try {
            // const res = await fetch("https://api.cloudinary.com/v1_1/dcqoiu7bp/image/upload", {
            //     method: "POST",
            //     body: data,
            // });
            // const json = await res.json();
            // console.log("hit")
            // console.log(json);
            // if(json.url){
            //     setImgUrl(json.url)
            //     console.log("I am ImgURL", imgUrl)
            //     const imgState = {...newForm, img: imgUrl}
            //     console.log("I am imgState", imgState)
            //     setNewForm(imgState)
            //     setLoading(false);

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newForm),
            }
            const response = await fetch("https://shoe-string.herokuapp.com/posts", requestOptions)
            console.log("I am before", newForm)
            const createdPost = await response.json()
            console.log(" I am created post", createdPost)
            setNewForm({
                username: " ",
                body: " ",
                tags: " ",
                img: " ",
                longitude: "",
                latitude: "",
                likes: " ",
            })
            setOpen(false)
            setSelectedFile(null)
            setLoading(false)
        } catch (err) {
            console.error(`Error in Try Block of handleSubmit function: ${err}`)
        }
    }

    const handleChange = (e) => {
        const userInput = { ...newForm }
        userInput[e.target.name] = e.target.value
        setNewForm(userInput)
    }

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

    useEffect(() => {
        console.log(newForm)
    }, [newForm])
    return (
        <div>
            <div></div>
        </div>
    )
}

export default CreatePost
