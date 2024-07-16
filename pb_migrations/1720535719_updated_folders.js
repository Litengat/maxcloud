/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvwshj9of9zih3r")

  // remove
  collection.schema.removeField("enlitzsv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9b1aous6",
    "name": "files",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "uy6pqeecmrxw6cv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvwshj9of9zih3r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "enlitzsv",
    "name": "files",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("9b1aous6")

  return dao.saveCollection(collection)
})
