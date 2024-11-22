"use client";

import { useState, useEffect } from 'react';

interface UserType {
  id: number;
  name: string;
  email: string;
  cpf: string;
  password: string;
}

const User = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLastUserId = async () => {
      try {
        const response = await fetch('http://localhost:5000/users/last');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserId(data.id);
      } catch (error) {
        console.error('Failed to fetch last user ID:', error);
      }
    };
    fetchLastUserId();
  }, []);

  useEffect(() => {
    if (userId !== null) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:5000/users/${userId}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      window.location.reload(); // Recarrega a página após a atualização
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      window.location.reload(); // Recarrega a página após a exclusão
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>Update User</h1>
      <form>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="cpf"
          value={user.cpf}
          placeholder="CPF"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="button" onClick={handleUpdate}>Update</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default User;