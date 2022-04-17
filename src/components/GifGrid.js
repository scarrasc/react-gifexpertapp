import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    const { data, loading } = useFetchGifs( category );


    return (<>
        <h3 className='animate__animated animate__fadeIn'> { category } </h3>

        { loading && <p animate__animated animate__flash>Loading</p> }

        <div className='card-grid'>
            { 
                data.map((img) => 
                    <GifGridItem 
                        img = { img }
                    />
                )
            }
        </div>
    </>
  )
}
