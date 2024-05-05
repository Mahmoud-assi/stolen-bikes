import { useRecoilState, useRecoilValue } from 'recoil'
import ReactPaginate from 'react-paginate'
import { BikesTotalCountAtom, PageIndexAtom, PageSizeAtom } from '@app/atoms/Bikes'
import { FooterWrapper } from '@app/components/common/FooterWrapper'

const ListFooter = () => {
	const pageSize = useRecoilValue(PageSizeAtom)
	const totalCount = useRecoilValue(BikesTotalCountAtom) ?? {}
	const pageCount = Math.ceil(totalCount.proximity / pageSize)
	const [, setPageIndex] = useRecoilState(PageIndexAtom)

	return (
		<FooterWrapper>
			<ReactPaginate
				pageCount={pageCount}
				previousLabel="Previous"
				nextLabel="Next"
				onPageChange={({ selected: selectedPage }) => setPageIndex(selectedPage + 1)}
				containerClassName="pagination"
				previousClassName="pagination__prev"
				previousLinkClassName="pagination__link"
				nextClassName="pagination__next"
				nextLinkClassName="pagination__link"
				disabledClassName="pagination__link__disable"
				activeClassName="pagination__link__active"
				renderOnZeroPageCount={null}
				breakLabel="..."
				pageRangeDisplayed={1}
				marginPagesDisplayed={1}
			/>
		</FooterWrapper>
	)
}

export default ListFooter
