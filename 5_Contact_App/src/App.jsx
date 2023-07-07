import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { createPortal } from "react-dom";
import UpdateModel from "./Components/UpdateModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setcontacts] = useState([]);
  const [open, setopen] = useState(false);
  const [econtact, setecontact] = useState({});
  const [isupdate, setisupdate] = useState(false);
  const [allcontactlist, setcontactlist] = useState([]);

  const onOpen = () => {
    setopen(true);
  };

  const onClose = () => {
    setopen(false);
  };

  //Geting the Contacts
  const GetContacts = async () => {
    try {
      const contactCollection = collection(db, "contacts");
      const contactsSnapshot = await getDocs(contactCollection);
      const contactList = contactsSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setcontacts(contactList);
      setcontactlist(contactList);
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted");
      GetContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const filterContacts = (e) => {
    const newcontacts = allcontactlist.filter((contact) => {
      return contact.name.toLowerCase().includes(e.target.value);
    });
    setcontacts(newcontacts);
  };

  useEffect(() => {
    GetContacts();
  }, []);

  return createPortal(
    <>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <div className="container">
        <div className="top">
          <div className="search-bar">
            <img src="./img/search.png" alt="" />
            <input onChange={filterContacts} type="text" />
          </div>
          <button
            onClick={() => {
              onOpen();
              setisupdate(false);
            }}
          >
            +
          </button>
        </div>

        <div className="contacts">
          {contacts.map((contact) => {
            return (
              <div className="contact" key={contact.id}>
                <div className="contact-info">
                  <img src="./img/contact.png" alt="" />
                  <div className="data">
                    <h3 className="name">{contact.name}</h3>
                    <p className="email">{contact.email}</p>
                  </div>
                </div>
                <div className="Buttons">
                  <button
                    onClick={() => {
                      onOpen();
                      setecontact(contact);
                      setisupdate(true);
                    }}
                  >
                    <img src="./img/pencil.png" alt="" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      DeleteContact(contact.id);
                    }}
                  >
                    <img src="./img/trash.png" alt="" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <UpdateModel
        GetContacts={GetContacts}
        onClose={onClose}
        open={open}
        isupdate={isupdate}
        contact={econtact}
      ></UpdateModel>
    </>,
    document.getElementById("model-root")
  );
}

export default App;
