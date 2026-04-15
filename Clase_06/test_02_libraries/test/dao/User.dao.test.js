import mongoose from "mongoose";
import UsersDao from "../../src/dao/Users.dao.js";
import Assert from 'assert'

mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`);

const assert = Assert.strict

describe('Test User Dao', () => {

    before(function () {
        this.userDao = new UsersDao()
    })

    beforeEach(function () {
        this.timeout(5000)
        mongoose.connection.collections.users.drop()
    })



    // test_01
    it('El dao debe devolver los usuarios en formato de arreglo', async function () {
        // Given
        const isArray = true

        // Then
        const result = await this.userDao.get()
        console.log(`Result: ${Array.isArray(result)}`);


        // Assert
        assert.strictEqual(Array.isArray(result), isArray)
    })


    // test_02
    it('El Dao debe agregar el usuario correctamente a la BD.', async function () {
        //Given 
        let mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };


        // Then
        const result = await this.userDao.save(mockUser)


        // Assert 
        assert.ok(result._id)
    })

})