import { Helmet } from 'react-helmet';
import { useState } from 'react';

const Modal = ({ showModal, closeModal, formData }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                <h3 className="text-2xl font-bold mb-4">Accepted your request</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Product:</strong> {formData.productName}</p>
                <p><strong>Purchase Date:</strong> {formData.purchaseDate}</p>
                <p><strong>Mobile:</strong> {formData.mobileNumber}</p>
                <p><strong>Issue Details:</strong> {formData.issueDetails}</p>
                <p><strong>Address:</strong> {formData.address}</p>
                <button 
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Support = () => {
    const [formData, setFormData] = useState({
        name: '',
        productName: '',
        purchaseDate: '',
        mobileNumber: '',
        issueDetails: '',
        address: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            name: '',
            productName: '',
            purchaseDate: '',
            mobileNumber: '',
            issueDetails: '',
            address: ''
        });
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Support | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/dashboard/support" />
            </Helmet>
            {/* -------------------------------------------------------------- */}
            <h3 className="text-center font-bold text-3xl">FAQ</h3>
<div className='w-full grid grid-cols-2 my-10 gap-5 border border-gray-100 bg-purple-300 rounded-2xl shadow-xl'>
<div>
        <div className="collapse collapse-arrow bg-purple-300">
  <input type="radio" name="my-accordion-2"  />
  <div className="collapse-title text-xl font-medium">What is the warranty period for my purchased gadget?</div>
  <div className="collapse-content">
    <p>Each gadget has a different warranty period. Typically, our gadgets come with a warranty period of 6 months to 1 year. Please refer to the product page or your invoice for the exact warranty duration.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-purple-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What does the warranty cover?</div>
  <div className="collapse-content">
    <p>Our warranty generally covers functional issues like manufacturing defects or electronic faults. It does not cover accidental damage, water damage, or issues caused by unauthorized repairs.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-purple-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How do I claim the warranty?</div>
  <div className="collapse-content">
    <p>To claim the warranty, contact our customer support team with your invoice and warranty card. Our team will verify your claim after inspecting the product.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-purple-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How long does it take to process a warranty claim?</div>
  <div className="collapse-content">
    <p>The warranty claim process typically takes 7–15 business days. However, the time may vary depending on the type of issue.</p>
  </div>
</div>
        </div>
        <div>
        <div className="collapse collapse-arrow bg-purple-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Is the warranty applicable to purchases made from local stores?</div>
  <div className="collapse-content">
    <p>No, the warranty is only applicable to products purchased through our website. Items bought from local stores or other sources are not covered under our warranty.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-purple-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What happens if the gadget cannot be repaired under warranty?</div>
  <div className="collapse-content">
    <p>If the gadget cannot be repaired under warranty, we may offer a replacement or a refund. This decision will be made after our team’s final assessment.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-purple-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Can I extend the warranty period?</div>
  <div className="collapse-content">
    <p>Currently, we do not offer an extended warranty option. If we introduce this feature in the future, it will be announced in our support section.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-purple-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Is the warranty transferable?</div>
  <div className="collapse-content">
    <p>No, our warranty is only valid for the original purchaser and is not transferable to others.</p>
  </div>
</div>
        </div>
       
</div>
            {/* -------------------------------------------------------------- */}

            <h3 className="text-center font-bold text-3xl">Claim Warranty</h3>

            <form onSubmit={handleSubmit} className="bg-purple-400 border border-gray-100 rounded-xl my-5 p-5 shadow-xl grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter Your Name"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 w-3/4"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        placeholder="Enter Product Name"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 w-3/4"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="purchaseDate">Purchase Date:</label>
                    <input
                        type="date"
                        id="purchaseDate"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleChange}
                        required
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 text-gray-400 w-3/4"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        placeholder="Enter phone Number"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 w-3/4 lg:w-full"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="issueDetails">Issue Details:</label>
                    <textarea
                        id="issueDetails"
                        name="issueDetails"
                        value={formData.issueDetails}
                        onChange={handleChange}
                        required
                        placeholder="Enter details"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-16 lg:h-12 w-full"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        placeholder="Enter your Address"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-16 lg:h-12 w-full"
                    />
                </div>
                <div className="col-span-1 lg:col-span-3 flex justify-center">
                    <button className="border border-purple-700 px-4 py-2 h-12 rounded font-bold text-white bg-purple-600" type="submit">
                        Submit
                    </button>
                </div>
            </form>

            <Modal showModal={showModal} closeModal={closeModal} formData={formData} />
        </div>
    );
};

export default Support;
