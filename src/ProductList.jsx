import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './ProductList.css'
import { isArrWithContent, isEmptyObj, sumObjFieldByArr } from './assets/globalFuncs';
import {addItem} from './CreateSlice.jsx'
import MainHeader from './MainHeader.jsx';

function ProductList({onGoToCart}) {
  
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {   
                    id: 1,
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: 15
                },
                {
                    id: 2,
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: 12
                },
                {
                    id: 3,
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: 18
                },
                {
                    id: 4,
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: 20
                },
                {
                    id: 5,
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: 17
                },
                {
                    id: 6,
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: 14
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    id: 7,
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: 20
                },
                {
                    id: 8,
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: 18
                },
                {
                    id: 9,
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: 15
                },
                {
                    id: 9,
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: 12
                },
                {
                    id: 10,
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: 14
                },
                {
                    id: 11,
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: 22
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    id: 12,
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: 10
                },
                {
                    id: 13,
                    name: "Marigold",
                    image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: 8
                },
                {
                    id: 14,
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: 20
                },
                {
                    id: 15,
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: 9
                },
                {
                    id: 16,
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: 20
                },
                {
                    id: 17,
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: 13
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    id: 18,
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: 14
                },
                {
                    id: 19,
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: 16
                },
                {
                    id: 20,
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: 13
                },
                {
                    id: 21,
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: 14
                },
                {
                    id: 22,
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: 15
                },
                {
                    id: 23,
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: 12
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    id: 24,
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: 25
                },
                {
                    id: 25,
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: 10
                },
                {
                    id: 26,
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: 15
                },
                {
                    id: 27,
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: 20
                },
                {
                    id: 28,
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: 18
                },
                {
                    id: 29,
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: 22
                }
            ]
        }
    ];

    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState([]);
    const handleAddToCart = (plant) => {
        if (!isEmptyObj(plant)){
            dispatch(addItem(plant));
            setAddedToCart((prevState) => ([
                ...prevState,
                plant.id // Add the product id to indicate it's added to cart
            ]));
        }
    }

    const isProductInCart = (plantId, arrIdPlantsInCart) => {
        let result = false;

        if (isArrWithContent(arrIdPlantsInCart)){
            result = arrIdPlantsInCart.includes(plantId);
        }

        return result;
    }

    const calculateTotalCost = (items) => {
        let totalCost = 0;

        if (isArrWithContent(items)){
            items.forEach((item) => {
                totalCost += item.cost * item.quantity;
            });
        }

        return totalCost;
    };

    return (
    <div>
        <MainHeader onGoToCart={onGoToCart}/>
        
        <div id="productsList" className="product-grid">
            {isArrWithContent(plantsArray)
                ? plantsArray.map((plantsGroup, index) => (
                    !isEmptyObj(plantsGroup)
                        ? (<div key={index}>
                            <h1 className="category-name"><div>{plantsGroup.category}</div></h1>
                            <div className="product-list">
                                {isArrWithContent(plantsGroup.plants)
                                    ? plantsGroup.plants.map((plant, plantIndex) => (
                                        <div className="product-card" key={plantIndex}>
                                            <img className="product-image" src={plant.image} alt={plant.name} />
                                            <div className="product-title">{plant.name}</div>
                                            <div className="product-description">{plant.description}</div>
                                            <div className="product-price">${plant.cost}</div>
                                            {
                                                !isProductInCart(plant.id, addedToCart)
                                                    ? <button className="product-button"  onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                                                    : <button className="product-button added-to-cart"  disabled>Added to Cart</button>
                                            }
                                            
                                        </div>))
                                    : null
                                }
                            </div>
                        </div>)
                        :   null
                    
                ))
                : null
            }

        </div>
    </div>
    );
}

export default ProductList;
