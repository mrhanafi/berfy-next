'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import ReactStars from 'react-stars'

const data = {
  "cosmetic_body": {
    "upper": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "cosmetic_lcd": {
    "black": 0,
    "white": 0,
    "line": 0,
    "dead_pixel": 0,
    "liquid_damages": 0,
    "back_light_smoothness": 0
  },
  "cosmetic_touch": {
    "scratch_score": 0,
    "responsive": 0
  },
  "cosmetic_rear_camera": {
    "scratch_score": 0,
    "functionality": 0,
    "video": 0,
    "photo": 0,
    "potrait": 0
  },
  "cosmetic_front_camera": {
    "scratch_score": 0,
    "functionality": 0,
    "video": 0,
    "photo": 0,
    "potrait": 0,
    "face_id": 0
  },
  "cosmetic_charging_port": {
    "cleanliness": 0,
    "functionality": 0,
    "microphone": 0,
    "fatigue_test": 0
  },
  "cosmetic_earpiece_speaker": {
    "cleanliness": 0,
    "functionality": 0,
    "microphone": 0
  },
  "cosmetic_loud_speaker": { "cleanliness": 0, "functionality": 0 },
  "quality_test": {
    "on_off_button": { "functional": 0, "fatigue_test": 0 },
    "volume_button": { "functional": 0, "fatigue_test": 0 },
    "silent_button": { "functional": 0, "fatigue_test": 0 },
    "speaker_ear_piece": { "functional": 0 },
    "speaker_loud": { "functional": 0 },
    "wifi_connection": { "functional": 0, "fatigue_test": 0 },
    "bluetooth": { "functional": 0 },
    "sim_card": { "functional": 0 },
    "lcd_testing": { "touch": 0, "lcd": 0 },
    "running_test": 0,
    "fatigue_test": 0,
    "free_tempered_glass": 0
  }
}

const AddNewPost = () => {
  const [loader,setLoader] = useState(false);

  return (
    <div className='mt-10 md:px-36 lg:px-50'>
        <div className='p-10 flex flex-col gap-5 items-center justify-center'>
            <h2 className='font-bold text-2xl'>Add New Device</h2>
            <div className='p-10 rounded-lg w-full border shadow-md flex flex-col gap-5'>
              {/* <h2 className='font-bold text-2xl'>Enter details of your inspection</h2> */}
              <div className='flex gap-2 flex-col'>
                  <h2 className='text-gray-500'>Title</h2>
                  <Input type="text" placeholder='Enter title' name="tile"/>
              </div>
              <div className='flex gap-2 flex-col'>
                  <h2 className='text-gray-500'>Description</h2>
                  <Textarea type="text" placeholder='Enter title' name="description"/>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 mb-10 gap-10'>
                  <div className='flex gap-2 flex-col'>
                      <h2 className='text-gray-500'>Model</h2>
                      <Input type="text" placeholder='Enter model' name="model"/>
                  </div>
                  <div className='flex gap-2 flex-col'>
                      <h2 className='text-gray-500'>IMEI</h2>
                      <Input type="text" placeholder='Enter imei' name="imei"/>
                  </div>
              </div>
                <Button 
                // disabled={!selectedAddress||!coordinates||loader}
                //  onClick={nextHandler}
                >
                  {loader ? <Loader className='animate-spin' /> : 'Next'}
                  </Button>
            </div>
        </div>

    </div>
  )
}

export default AddNewPost
