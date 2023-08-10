import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ajaxService from '../../service/fetchService'

import TemImage from '../../images/banner_73.jpg'

const PetDetails = () => {
    const id = window.location.href.split("/petDetails/")[1]
    const [pet, setPet] = useState([])
    const [loading, setLoading] = useState(true)

    //console.log(id)

    //console.log(loading)
    useEffect(() => {

        ajaxService(`/api/pet/getPetDetails/${id}`, "get", null, null)
            .then((data) => {
                console.log(data);
                setPet(data);
                setLoading(false);
            })

    }, [])


    return <>
        {loading && <div className="text-center">
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div>you get in</div>
        </div>
        }
        {!loading && <div className="container">
            <div className="row my-5">
                <div className="col-md-6 text-center">
                    <img src={TemImage} className=' h-575 w-75' alt='product' />
                </div>
                <div className="col-md-6">
                    <h2>{pet.breed}</h2>
                    <p className="text-wrap">
                        {pet.description}
                    </p>
                    <h2>Categories</h2>
                    {/* {product.category.map(item => <span class="badge rounded-pill bg-info text-dark mb-3 me-2">{item}</span>)} */}
                    <h2>Price</h2>
                    <h4>{pet.price} $</h4>
                </div>
            </div>
        </div>}
    </>
}
export default PetDetails