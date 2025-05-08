import { useState } from "react";
import "./index.css";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function alertCloseModal() {
        alert("OK");
        setIsModalOpen(false);
    }

    return (
        <div className="app">
            <Main
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                closeModal={closeModal}
                alertCloseModal={alertCloseModal}
                openModal={openModal}
            >
                <Modal
                    title="Confirm Your Action"
                    content="Are you sure you want to proceed? This action cannot be undone."
                    showButton
                    closeModal={closeModal}
                    alertCloseModal={alertCloseModal}
                >
                    <Button handleClick={closeModal} variant={"closeButton"}>
                        &times;
                    </Button>

                    <Button
                        handleClick={closeModal}
                        variant={"secondaryButton"}
                    >
                        Cancel
                    </Button>

                    <Button
                        handleClick={alertCloseModal}
                        variant={"primaryButton"}
                    >
                        Yes, Continue
                    </Button>
                </Modal>
            </Main>
        </div>
    );
}

export default App;
