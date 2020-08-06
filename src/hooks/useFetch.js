import { useState, useEffect } from 'react';

export default function useFetch(url) {

      const [data, setData] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)

      useEffect(() => {
            async function fetchData() {
                  setLoading(true)
                  try {
                        const fetchData = await (await fetch(url)).json()
                        setData(fetchData)
                  } catch (error) {
                        setError(error)
                  }
                  finally {
                        setLoading(false)
                  }
            }
            fetchData()
      }, [])

      return {
            data, loading, error
      }
}