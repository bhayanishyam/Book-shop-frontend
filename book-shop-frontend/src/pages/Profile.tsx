import Container from "@/components/Container";


export default function Profile() {
    return (
        <Container>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
                <div className="text-center">
                    <img src="https://via.placeholder.com/100" alt="Profile" className="w-24 h-24 mx-auto rounded-full mb-4" />
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-gray-600">johndoe@example.com</p>
                </div>
                <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">Logout</button>
            </div>
        </div>
        </Container>
    );
}
