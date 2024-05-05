import { Button } from '@admixltd/admix-component-library'
import { FilterLoadingAtom } from '@app/atoms/Bikes'
import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'

const FilterAction = () => {
	const filterLoading = useRecoilValue(FilterLoadingAtom)
	return useMemo(
		() => (
			<Button shineLoading={filterLoading} type="submit" variant="contained">
				Filter
			</Button>
		),
		[filterLoading]
	)
}

export default FilterAction
