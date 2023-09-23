import { View, Text } from 'react-native'
import React from 'react'
import { CustomCard } from '../../../components/Cards'
import { america, australia, italy, southIndia, gujarat, northIndia, punjab, middleEast, brazil, chinese, korea, japan, thai, mediterranean } from '../../../../assets/images'

const Data =[
    {
        name:"America",
        image:america,
    },
    {
        name:"Australia",
        image:australia,
    },
    {
        name:"Italy",
        image:italy,
    },
    {
        name:"South India",
        image:southIndia,
    },
    {
        name:"Gujarat",
        image:gujarat,
    },
    {
        name:"North India",
        image:northIndia,
    },
    {
        name:"Punjab",
        image:punjab,
    },
    {
        name:"Middle East",
        image:middleEast,
    },
    {
        name:"Brazil",
        image:brazil,
    },
    {
        name:"Chinese",
        image:chinese,
    },
    {
        name:"Korea",
        image:korea,
    },
    {
        name:"Japan",
        image:japan,
    },
    {
        name:"Thai",
        image:thai,
    },
    {
        name:"Mediterranean",
        image:mediterranean,
    },
]

const Cuisine = () => {
  return (
    <View style={{gap:8}} className='flex justify-between p-2 flex-wrap w-[100%] flex-row'>
    
    {
        Data.map((item,index)=><CustomCard key={index} style={{alignItems:'center',backgroundColor:"#E8E8E8",borderRadius:6}} source={item.image}>{item.name}</CustomCard>)
    }
    </View>
  )
}

export default Cuisine