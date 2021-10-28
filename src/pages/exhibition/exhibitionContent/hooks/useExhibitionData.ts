import { useCallback, useState } from 'react'
import { ExhibitionData } from '../constants'
import { IExhibitionPage } from '../types'

const useExhibitionData = (pageType: IExhibitionPage) => {
  const [page, setPage] = useState(0)
  const changePage = useCallback(() => {
    setPage((state) => state + 1)
  }, [])

  let data = null
  let title = null
  try {
    data = ExhibitionData[pageType].data
    title = ExhibitionData[pageType].text
  } catch {}

  return {
    type: data ? data[page].type : null,
    contentData: data ? data[page].data : null,
    title,
    changePage,
  }
}

export default useExhibitionData
