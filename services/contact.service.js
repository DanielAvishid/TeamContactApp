import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'contactDB'

_createContacts()
console.log('hi')

export const contactService = {
    query,
    getById,
    save,
    remove,
    getEmptyContact,
}

function query() {
    return storageService.query(STORAGE_KEY)
        .then(contacts => {
            return contacts
        })
}

function getById(contactId) {
    return storageService.get(STORAGE_KEY, contactId)
}

function remove(contactId) {
    return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
    if (contact._id) {
        return storageService.put(STORAGE_KEY, contact)
    } else {
        return storageService.post(STORAGE_KEY, contact)
    }
}

function getEmptyContact() {
    return {}
}

function _createContacts() {
    let contacts = utilService.loadFromStorage(STORAGE_KEY)
    if (!contacts || !contacts.length) {
        contacts = [
            {
                id: utilService.makeId(),
                firstname: 'Daniel',
                lastname: 'Avishid',
                email: 'danielavishid@gmail.com',
                phone: '052-7457722',
                desc: 'description txt'
            },
            {
                id: utilService.makeId(),
                firstname: 'Ofir',
                lastname: 'Kaspi',
                email: 'ofirkaspi@gmail.com',
                phone: '052-3213151',
                desc: 'description txt'
            },
            {
                id: utilService.makeId(),
                firstname: 'Sapir',
                lastname: 'Avishid',
                email: 'sapiravishid@gmail.com',
                phone: '052-7457332',
                desc: 'description txt'
            },
            {
                id: utilService.makeId(),
                firstname: 'Ari',
                lastname: 'Avishid',
                email: 'ariavishid@gmail.com',
                phone: '052-7457333',
                desc: 'description txt'
            }
        ]
        utilService.saveToStorage(STORAGE_KEY, contacts)
    }
}