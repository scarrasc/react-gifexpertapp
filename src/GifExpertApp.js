import { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setcategories([...categories, 'X Hunter'])
    // };

    return <Fragment>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr/>

        <ol>
            {
                categories.map((category, index) => {
                    return <GifGrid key= { category } category = { category }/>
                })
            }
        </ol>

    </Fragment>
}

export default GifExpertApp;