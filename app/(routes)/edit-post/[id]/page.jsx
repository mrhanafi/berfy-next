'use client'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
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

const EditPost = () => {
  const [rating,setRating] = useState(data);
  return (
  <div>
    <div className='px-10 md:px-36 my-10'>
          <h2 className='font-bold text-2xl'>Enter details of your inspection</h2>
          <form action="">
              <div className='p-8 rounded-lg shadow-md'>
                  <div className='grid grid-cols-1 md:grid-cols-3'>
                  </div>
                  <div className="grid grid-col-1 gap-10 mt-10">
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Title</h2>
                          <Input type="text" placeholder='Enter title' name="tile"/>
                      </div>
                  </div>
                  <div className="grid grid-col-1 gap-10 mt-10">
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Description</h2>
                          <Textarea type="text" placeholder='Enter title' name="description"/>
                      </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Model</h2>
                          <Input type="text" placeholder='Enter model' name="model"/>
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>IMEI</h2>
                          <Input type="text" placeholder='Enter imei' name="imei"/>
                      </div>
                  </div>
                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Cosmetic Body</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Upper</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_body: {...prevRating.cosmetic_body,upper: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_body.upper}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Left</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_body: {...prevRating.cosmetic_body,left: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_body.left}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Right</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_body: {...prevRating.cosmetic_body,right: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_body.right}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Bottom</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_body: {...prevRating.cosmetic_body,bottom: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_body.bottom}
                          />
                      </div>
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Cosmetic LCD</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Black</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_lcd: {...prevRating.cosmetic_lcd,black: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_lcd.black}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>White</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_lcd: {...prevRating.cosmetic_lcd,white: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_lcd.white}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Line</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_lcd: {...prevRating.cosmetic_lcd,line: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_lcd.line}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Dead Pixel</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_lcd: {...prevRating.cosmetic_lcd,dead_pixel: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_lcd.dead_pixel}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Liquid Damages</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_lcd: {...prevRating.cosmetic_lcd,liquid_damages: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_lcd.liquid_damages}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Back Light Smoothness</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_lcd: {...prevRating.cosmetic_lcd,back_light_smoothness: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_lcd.back_light_smoothness}
                          />
                      </div>                    
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Cosmetic Touch</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Scratch</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_touch: {...prevRating.cosmetic_touch,scratch_score: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_touch.scratch_score}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Responsive</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_touch: {...prevRating.cosmetic_touch,responsive: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_touch.responsive}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Cosmetic Rear Camera</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Responsive</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_rear_camera: {...prevRating.cosmetic_rear_camera,scratch_score: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_rear_camera.scratch_score}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_rear_camera: {...prevRating.cosmetic_rear_camera,functionality: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_rear_camera.functionality}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Video</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_rear_camera: {...prevRating.cosmetic_rear_camera,video: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_rear_camera.video}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Photo</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_rear_camera: {...prevRating.cosmetic_rear_camera,photo: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_rear_camera.photo}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Potrait</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_rear_camera: {...prevRating.cosmetic_rear_camera,potrait: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_rear_camera.potrait}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Cosmetic Front Camera</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Scratch</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_front_camera: {...prevRating.cosmetic_front_camera,scratch_score: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_front_camera.scratch_score}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_front_camera: {...prevRating.cosmetic_front_camera,functionality: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_front_camera.functionality}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Video</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_front_camera: {...prevRating.cosmetic_front_camera,video: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_front_camera.video}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Photo</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_front_camera: {...prevRating.cosmetic_front_camera,photo: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_front_camera.photo}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Potrait</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_front_camera: {...prevRating.cosmetic_front_camera,potrait: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_front_camera.potrait}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Face ID</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_front_camera: {...prevRating.cosmetic_front_camera,face_id: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_front_camera.face_id}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Cosmetic Charging Port</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Cleanliness</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_charging_port: {...prevRating.cosmetic_charging_port,cleanliness: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_charging_port.cleanliness}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_charging_port: {...prevRating.cosmetic_charging_port,functionality: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_charging_port.functionality}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Microphone</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_charging_port: {...prevRating.cosmetic_charging_port,microphone: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_charging_port.microphone}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Fatigue Test</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_charging_port: {...prevRating.cosmetic_charging_port,fatigue_test: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_charging_port.fatigue_test}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Cosmetic Earpiece & Speaker</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Cleanliness</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_earpiece_speaker: {...prevRating.cosmetic_earpiece_speaker,cleanliness: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_earpiece_speaker.cleanliness}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_earpiece_speaker: {...prevRating.cosmetic_earpiece_speaker,functionality: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_earpiece_speaker.functionality}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_earpiece_speaker: {...prevRating.cosmetic_earpiece_speaker,microphone: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_earpiece_speaker.microphone}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Cosmetic Loudspeaker</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Cleanliness</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_loud_speaker: {...prevRating.cosmetic_loud_speaker,cleanliness: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_loud_speaker.cleanliness}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              cosmetic_loud_speaker: {...prevRating.cosmetic_loud_speaker,functionality: val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.cosmetic_loud_speaker.functionality}
                          />
                      </div> 
                  </div>

                  
                  {/* <h2 className='font-bold text-xl'>Quality Test</h2> */}
                  


              </div>

              <h2 className='font-bold text-2xl mt-10'>Quality Test</h2>
              <div className='p-8 rounded-lg shadow-md'>
              <h2 className='font-bold text-xl'>On/Off Button</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,on_off_button: {
                                ...prevRating.quality_test.on_off_button,functional:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.on_off_button.functional}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Fatigue Test</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,on_off_button: {
                                ...prevRating.quality_test.on_off_button,fatigue_test:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.on_off_button.fatigue_test}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Volume Button</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,volume_button: {
                                ...prevRating.quality_test.volume_button,functional:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.volume_button.functional}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Fatigue Test</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,volume_button: {
                                ...prevRating.quality_test.volume_button,fatigue_test:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.volume_button.fatigue_test}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Silent Button</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,silent_button: {
                                ...prevRating.quality_test.silent_button,functional:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.silent_button.functional}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Fatigue Test</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,silent_button: {
                                ...prevRating.quality_test.silent_button,fatigue_test:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.silent_button.fatigue_test}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Speaker & Ear Piece</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,speaker_ear_piece: {
                                ...prevRating.quality_test.speaker_ear_piece,functional:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.speaker_ear_piece.functional}
                          />
                      </div>
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Loudspeaker</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,speaker_loud: {
                                ...prevRating.quality_test.speaker_loud,functional:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.speaker_loud.functional}
                          />
                      </div>
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Wifi Connection</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,wifi_connection: {
                                ...prevRating.quality_test.wifi_connection,functional:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.wifi_connection.functional}
                          />
                      </div> 
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Fatigue Test</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,wifi_connection: {
                                ...prevRating.quality_test.wifi_connection,fatigue_test:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.wifi_connection.fatigue_test}
                          />
                      </div> 
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Bluetooth</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,bluetooth: {
                                ...prevRating.quality_test.bluetooth,functional:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.bluetooth.functional}
                          />
                      </div>
                  </div>

                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>Sim Card</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Functionality</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,sim_card: {
                                ...prevRating.quality_test.sim_card,functional:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.sim_card.functional}
                          />
                      </div>
                  </div>


                  <hr className='mt-8 mb-8' />
                  <h2 className='font-bold text-xl'>LCD Testing</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Touch</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,lcd_testing: {
                                ...prevRating.quality_test.lcd_testing,touch:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.lcd_testing.touch}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>LCD</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,lcd_testing: {
                                ...prevRating.quality_test.lcd_testing,lcd:val
                              }}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.lcd_testing.lcd}
                          />
                      </div>
                  </div>

                  <hr className='mt-8 mb-8' />
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Running Test</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,running_test:val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.running_test}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Fatigue Test</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,fatigue_test:val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.fatigue_test}
                          />
                      </div>
                      <div className='flex gap-2 flex-col'>
                          <h2 className='text-gray-500'>Tempered Glass</h2>
                          <ReactStars
                          size={30}
                          onChange={(val) => {
                            setRating(prevRating => ({
                              ...prevRating,
                              quality_test: {...prevRating.quality_test,free_tempered_glass:val}
                            }))
                          }}
                          half={false}
                          // onChange={handleRating}
                          value={rating.quality_test.free_tempered_glass}
                          />
                      </div>
                  </div>
              </div>

          </form>
        </div>
  </div>
  )
}

export default EditPost
