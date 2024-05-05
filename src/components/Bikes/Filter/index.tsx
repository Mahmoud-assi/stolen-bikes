import { FONT_SIZE } from '@app/contants/media'
import styled from '@emotion/styled'
import { Input, SomeObject } from '@admixltd/admix-component-library'
import { useRecoilState } from 'recoil'
import { BikeFilterAtom } from '@app/atoms/Bikes'
import { ChangeEvent, useState } from 'react'
import { debounce, textFieldClasses } from '@mui/material'
import FilterAction from './FilterAction'

const Filter = () => {
	const [filter, setFilter] = useRecoilState(BikeFilterAtom)
	const [formValues, setFormValues] = useState<SomeObject>({})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter({
			...filter,
			query: e.target.value,
		})
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	return (
		<FilterWrapper>
			<Title>Filter options</Title>
			<FormContent>
				<Input
					label="Search for bike"
					placeholder="Search for bike"
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						handleChange(e)
						debounce(handleChange, 500)
					}}
				/>
				<form
					onSubmit={e => {
						e.preventDefault()
						// Object.keys(formValues).forEach(key => {
						// 	if (formValues[key]) {
						// 		setFilter({ ...filter, key: formValues[key] })
						// 	}
						// })
						const newFilter: SomeObject = { ...filter }
						for (const key in formValues)
							if (formValues[key]) newFilter[key] = formValues[key]
						setFilter(newFilter)
					}}
				>
					<div>
						<Input
							{...{
								onChange: handleInputChange,
								name: 'serial',
								label: 'Serial',
								placeholder: 'Serial',
							}}
						/>
						<Input
							{...{
								onChange: handleInputChange,
								name: 'mnufacturer',
								label: 'Manufacturer',
								placeholder: 'Manufacturer',
							}}
						/>
					</div>
					<FilterAction />
				</form>
			</FormContent>
		</FilterWrapper>
	)
}

const FilterWrapper = styled.div`
	display: grid;
	gap: 1rem;
	padding: 1rem;
	background: ${({ theme }) => theme.colors.gray100};
	border-radius: 1rem;
	box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
	height: fit-content;
`

const Title = styled.h1`
	font-weight: bold;
	font-size: ${FONT_SIZE.xl};
	line-height: normal;
	text-align: start;
`

const FormContent = styled.div`
	display: grid;
	gap: 1rem;
	.${textFieldClasses.root} {
		> label {
			max-width: 100% !important;
			> span {
				color: ${({ theme }) => theme.colors.gray750} !important;
			}
		}
		fieldset {
			> legend {
				background: ${({ theme }) => theme.colors.gray100} !important;
			}
		}
	}
	> form {
		display: grid;
		gap: 1rem;
		> div {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}
`

export default Filter
