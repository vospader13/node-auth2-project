exports.up = async function(knex) {
    await knex.schema.createTable("users", table => {
      table.increments("id")
      table.string("username").unique().notNull()
      table.string("password").notNull()
      table.string("department").unique().notNull()
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
  };
