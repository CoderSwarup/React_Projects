import React, { useEffect, useState } from "react";
import Model from "./Model";
import { db } from "../config/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
export default function UpdateModel({
  open,
  onClose,
  GetContacts,
  isupdate,
  contact,
}) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const Submit = async () => {
    try {
      if (name == "" || email == "") {
        alert("please Fill name or Email");
        return;
      }
      const contact = {
        name,
        email,
      };
      const contactRef = collection(db, "contacts");
      // console.log(contact);

      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added");
      GetContacts();
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateContact = async () => {
    try {
      if (name == "" || email == "") {
        alert("please Fill name or Email");
        return;
      }
      const contactRef = doc(db, "contacts", contact.id);
      await updateDoc(contactRef, { name, email });
      toast.success("Contact Updated");
      onClose();
      GetContacts();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isupdate) {
      setname(contact.name);
      setemail(contact.email);
    } else {
      setname("");
      setemail("");
    }
  }, [contact, isupdate]);

  return (
    <Model onClose={onClose} open={open}>
      <h2 style={{ textAlign: "center" }}>Update model</h2>
      <form action="" className="update">
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            value={email}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            isupdate ? UpdateContact() : Submit();
          }}
        >
          {isupdate ? "Update" : "Add"}Contact
        </button>
      </form>
    </Model>
  );
}
