
import React, { useEffect, useState } from 'react'
import { Keyboard, TextInput, View, Button, Text } from 'react-native'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'

const animalsOfTheWeek = [
  'Wallaby',
  'Peregrin Falcon',
  'Dolphin',
  'Elephant',
  'Okapi',
  'Poison Arrow Frog',
  'Dingo'
]

const onSubmit = (seconds) => {
  Keyboard.dismiss()
  const schedulingOptions = {
    content: {
      title: `Your animal of the day is ${animalsOfTheWeek[Math.floor(Math.random()*animalsOfTheWeek.length)]}`,
      body: 'Open the app to read more about your animal of the day!',
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: 'blue'
    },
    trigger: {
      seconds: seconds,
    },
  }
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(
    schedulingOptions,
  )
}

const handleNotification = () => {
  console.warn('Your notification ran, but won`t show up in the app!')
}

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync()
  if (Constants.isDevice && status === 'granted')
    console.log('Notification permissions granted.')
}

const AnimalOfTheDay = () => {
  useEffect(() => {
    askNotification()

    const listener = Notifications.addNotificationReceivedListener(handleNotification)
    return () => listener.remove()
  }, [])

  return (
    <View>
      <Text>Press the button to get your very own animal of the day!</Text>

      <Button onPress={() => onSubmit(5)} title='Schedule'/>
    </View>)
}

export default AnimalOfTheDay

