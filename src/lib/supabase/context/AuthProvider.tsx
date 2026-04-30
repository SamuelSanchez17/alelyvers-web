'use client'

import { createContext, useEffect, useState, ReactNode } from "react"
import {User, Session} from "@supabase/supabase-js"
import {createClient} from "@/lib/supabase/client"

type AuthContextType =
{
    user: User | null
    session: Session | null
    isLoading: boolean
}

export const AuthContext = createContext<AuthContextType>
({
    user: null,
    session: null,
    isLoading: true
})

export const AuthProvider = ({ children }: {children: ReactNode}) =>
{
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    //usar cliente del navegador
    const supabase = createClient()

    useEffect(() => {
        const mount = async () => 
        {
            //Verifica si existe una sesión activa al cargar la pagina
            const { data: {session:initialSession } } = await supabase.auth.getSession()
            setSession(initialSession)
            setUser(initialSession?.user ?? null)
            setIsLoading(false)

            //Escuchar cambios de estado en la sesión (login, logout, etc)
            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, currentSession) => {
            setSession(currentSession)
            setUser(currentSession?.user ?? null)
            setIsLoading(false)
            })

            return () => 
            {
                subscription.unsubscribe()
            }
        }

        mount()
    }, [])

    return (
        <AuthContext.Provider value={{user, session, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}