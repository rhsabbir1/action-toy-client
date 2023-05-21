import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCart from './ToyCart';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [catagory, setCatagory] = useState("Marvel")


    useEffect(() => {
        fetch(`https://action-figure-toys-server.vercel.app/products/${catagory}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [catagory])
    return (
        <div className='pt-16 bg-slate-200'>
            <h1 className='text-4xl font-bold text-center'>Shop By Category</h1>

            <div className='text-center p-16'>
                <Tabs>
                    <TabList >
                        <Tab className='btn btn-outline mr-1' ><button onClick={() => setCatagory('Marvel')}>Marvel</button></Tab>
                        <Tab className='btn btn-outline mr-1' ><button onClick={() => setCatagory('Avengers')}>Avengers</button></Tab>
                        <Tab className='btn btn-outline mr-1' ><button onClick={() => setCatagory('star wars')}>Star wars</button></Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto'>
                            {
                                toys.map(toy => <ToyCart
                                    key={toy._id}
                                    toy={toy}
                                >
                                </ToyCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto'>
                            {
                                toys.map(toy => <ToyCart
                                    key={toy._id}
                                    toy={toy}
                                >
                                </ToyCart>)
                            }
                        </div>
                    </TabPanel>



                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto'>
                            {
                                toys.map(toy => <ToyCart
                                    key={toy._id}
                                    toy={toy}
                                >
                                </ToyCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto'>
                            {
                                toys.map(toy => <ToyCart
                                    key={toy._id}
                                    toy={toy}
                                >
                                </ToyCart>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;