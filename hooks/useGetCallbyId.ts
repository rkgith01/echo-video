import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCallbyId = (id: string | string[]) =>{
    const [call, setCall] = useState<Call>()
    const [isLoading, setIsLoading] = useState(true)

    const clientInHooks = useStreamVideoClient()

    useEffect(() => {
        if(!clientInHooks) return

        const loadCall = async () =>{
            const {calls} = await clientInHooks.queryCalls({
                filter_conditions:{
                    id
                }
            })
            if(calls.length > 0) setCall(calls[0])
            setIsLoading(false)
        }
        loadCall()
    }, [clientInHooks, id])

    return { call, isLoading}
}