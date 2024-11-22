from flask import Flask, request, jsonify
from flask_cors import CORS
from database import get_db_connection

app = Flask(__name__)
CORS(app)

@app.route('/users/last', methods=['GET'])
def get_last_user():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users ORDER BY id DESC FETCH FIRST 1 ROWS ONLY")
    user = cursor.fetchone()
    cursor.close()
    connection.close()
    if user:
        return jsonify({"id": user[0], "name": user[1], "email": user[2], "cpf": user[3], "password": user[4]})
    else:
        return jsonify({"message": "No users found"}), 404

@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute(
        "INSERT INTO users (name, email, cpf, password) VALUES (:1, :2, :3, :4)",
        (data['name'], data['email'], data['cpf'], data['password'])
    )
    connection.commit()
    cursor.close()
    connection.close()
    return jsonify({"message": "User created successfully"}), 201

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users WHERE id = :1", (user_id,))
    user = cursor.fetchone()
    cursor.close()
    connection.close()
    if user:
        return jsonify({"id": user[0], "name": user[1], "email": user[2], "cpf": user[3]})
    else:
        return jsonify({"message": "User not found"}), 404

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.json
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute(
        "UPDATE users SET name = :1, email = :2, cpf = :3, password = :4 WHERE id = :5",
        (data['name'], data['email'], data['cpf'], data['password'], user_id)
    )
    connection.commit()
    cursor.close()
    connection.close()
    return jsonify({"message": "User updated successfully"})

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("DELETE FROM users WHERE id = :1", (user_id,))
    connection.commit()
    cursor.close()
    connection.close()
    return jsonify({"message": "User deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)