"use client"
import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import {
    StreamCall,
    User,
    StreamVideo,
    StreamVideoClient,
  } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
//   const userId = 'user-id';
//   const token = 'authentication-token';
//   const user: User = { id: userId };
  
//   const client = new StreamVideoClient({ apiKey, user, token });
//   const call = client.call('default', 'my-first-call');
//   call.join({ create: true });
  
  export const StreamVideoProvider = ( {children} : {children: ReactNode}) => {
    const [vidClient, setVidClient] = useState<StreamVideoClient>()
    const { user , isLoaded} = useUser()

    useEffect(() => {
        if(!isLoaded || !user) return
        if(!apiKey) throw new Error ('Stream API key not found')

        // setVidClient(new StreamVideoClient({ apiKey, user, token: user.token }))
        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider: tokenProvider
        })
        setVidClient(client)

    },[user, isLoaded])

    if(!vidClient) return <Loader/>

    return (
      <StreamVideo client={vidClient}>
        {children}
      </StreamVideo>
    );
  };