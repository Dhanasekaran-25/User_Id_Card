import './User.css'

function User({
  companyname,
  slogan,
  name,
  jobposition,
  number,
  email,
  address,
  website,
  photo
}) {
  return (
    <div className="id-card">
      <div className="card-header">
        <h2>{companyname || 'COMPANY NAME'}</h2>
        <p>{slogan || 'Company Slogan'}</p>
      </div>

      {photo && <img src={photo} alt="Uploaded" className="photo" />}

      <div className="card-details">
        <p><strong>Name:</strong> {name || 'Your Name'}</p>
        <p><strong>Position:</strong> {jobposition || 'Job Position'}</p>
        <p><strong>Mobile:</strong> {number || '1234567890'}</p>
        <p><strong>Email:</strong> {email || 'example@mail.com'}</p>
        <p><strong>Address:</strong> {address || 'Address goes here'}</p>
      </div>

      <div className="card-footer">
        <p>{website || 'www.example.com'}</p>
      </div>
    </div>
  )
}

export default User
