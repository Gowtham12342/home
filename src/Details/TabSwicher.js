import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardFile from './CardFile'
import { Spin } from 'antd';
import Footers from './Footers';


function TabPanel(props) {
    const { children, value, index, ...other } = props;




    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const [categoriesTotaldata, setCategoriesTotaldata] = useState([]);
    const [removedDups, setRemovedDups] = useState([]);
    const [contenttoFilter, setContenttoFilter] = useState([]);
    const [calculater, setCalculater] = useState([]);
    

    useEffect(() => {
        let getData = async () => {
            let dataGot = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")

            let toRemoveDups = await dataGot.data.reduce((storageArray, e, index) => {
                if (!storageArray.includes(e.mainCategory)) {
                    storageArray.push(e.mainCategory)

                }
                return storageArray

            }, [])
            let toFilter = decodeURI(window.location.href.split("/")[window.location.href.split("/").length - 1])
            setRemovedDups(toRemoveDups.filter(e => {
                return e == toFilter
            }));



            let dataToFilter = await dataGot.data.filter(e => {

                return e.mainCategory == toFilter
            })
            setContenttoFilter(dataToFilter);
            setCategoriesTotaldata(await dataGot.data);
        }
        getData();
    }, []);

    const handleCalc1 = (jobFromData, priceFromData, ratingFromData, descriptionFormData)=>{

        let newObj = calculater;
        if(newObj[jobFromData]>0 && parseInt (priceFromData) != 0){
            newObj[jobFromData] -= parseInt (priceFromData)
        }
        // else{
        //      newObj=" add  job first "
        //  }
        setCalculater(newObj);
        console.log(calculater)
        
            }

    const handleCalc = (jobFromData, priceFromData, ratingFromData, descriptionFormData)=>{
        
        let newObj1 = calculater;
        if(newObj1[jobFromData]){
            newObj1[jobFromData] += parseInt(priceFromData)
        }else{
            newObj1[jobFromData] = parseInt(priceFromData)
        }
        setCalculater(newObj1);
        console.log(calculater)
    }

   

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {contenttoFilter.length ?
                (
                    <>
                        <Box
                            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
                        >
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                {removedDups.length ? removedDups.map((e, index) => (
                                    <Tab label={e} {...a11yProps(index)} />

                                )) : (<div></div>)}

                                {/* <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                {contenttoFilter.map(e => (

                                    <CardFile calcSet = {handleCalc} newSet = {handleCalc1} jobFromData={e.job} priceFromData={e.price} ratingFromData={e.rating} descriptionFormData={e.description} />

                                ))}

                            </TabPanel>


                        </Box>
                        <div style={{display:"flex",justifyContent:"end"}}>
                        <Footers  listAddItems={"Total Amount"} />
                        </div>
                    </>
                ) : (<Spin />)}
        </>
    );
}
