import { useState, useEffect } from "react"

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
	const [contact, setContact] = useState(null);

	useEffect(() => {
		const fetchSelectedContact = async () => {
			try {
				const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
				const result = await response.json();
				setContact(result);
				// console.log(contact);
			} catch (error) {
				console.log(error)
			}
		}
		fetchSelectedContact();
	}, [])

	return (
		<>
		{console.log(contact)}
		{/* <p>{contact.name}</p> */}
			{/* <table>
				<thead>
					<tr>
						<th colSpan="2">{contact.name}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Phone:</td>
						<td>{contact.phone}</td>
					</tr>
					<tr>
						<td>Email: </td>
						<td>{contact.email}</td>
					</tr>
					<tr>
						<td>Company: </td>
						<td>{contact.company}</td>
					</tr>
					<tr>
						<td>Website: </td>
						<td>{contact.website}</td>
					</tr>
				</tbody>
			</table> */}

		</>
	)
}

export default SelectedContact