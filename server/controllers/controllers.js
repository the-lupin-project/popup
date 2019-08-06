const db = require('../data/database');

const eventController = {};

eventController.addEvent = async (req, res, next) => {
    // required inputs to add an event
    const {title, description, maxAttendees, host, location, cuisineType, start, end, date, price} = req.body;
    // validate required information has been included in request 
    if (title && description && maxAttendees && host && location && cuisineType && start && end && date && price) {
        const query = {
            text: `INSERT INTO events(title, description, max_attendees, host, location, cuisine_type, start, end, date, price) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            values: [title, description, maxAttendees, host, location, cuisineType, start, end, date, price],
        };
        try {
            const result = await db.query(query);
            res.locals.event = result.rows[0];
            return next();
        }
        catch(err) {
            return next({
                log: 'DB error, could not add event',
                message: {err: 'an error occurred while adding event'}
            });
        }
    } else {
        return next({
            log: 'could not add event due to missing field(s)',
            message: {err: 'an error occurred while adding event'}
        });
    }
};

eventController.updateEvent = async (req,res, next) => {
    // UPDATE table_name SET column1 = value1, column2 = value2....columnN=valueN [ WHERE  CONDITION ];
    // UPDATE events 
    const id = req.params.id;
    if (id) {
        const {title, description, maxAttendees, host, location, cuisineType, start, end, date, price} = req.params;
        if (title || description || maxAttendees || host || location || cuisineType || start || end || date || price) {
            const query = {
                text: `UPDATE events SET title = title, description = description, max_attendees = maxAttendees, host = host, 
                location = location, cuisine_type = cuisineType, start = start, end = end, date = date, price = price
                WHERE id = $1 RETURNING *`,
                values: [title, description, maxAttendees, host, location, cuisineType, start, end, date, price],
            };
            try {
                const result = await db.query(query);
                res.locals.event = result.rows[0];
                return next();
            }
            catch(err) {
                return next({
                log: 'DB error, could not update event',
                message: {err: 'an error occurred while updating event'}
                });
            }
        }
    
    } else {
        return next({
            log: 'could not update event ',
            message: {err: 'an error occurred while updating event'}
        });
    }
}


eventController.deleteEvent = async (req, res, nex) => {
    // DELETE FROM table_name WHERE  {CONDITION} --- /events/:id;
    const id = req.params.id;
    if (id) {
        const query = {
            text: 'DELETE FROM events WHERE id = $1 RETURNING *',
            values: [id],
        };
        try {
            const result = await db.query(query);
            if (result.rows.length === 0) {
                return next({
                    log: 'DB error, could not find event',
                    message: {err: 'an error occurred while deleting event'}
                });
            }
            res.locals.event = result.rows[0];
            return next();
        }
        catch(err) {
            return next({
                log: 'DB error, could not delete event',
                message: {err: 'an error occurred while deleting event'}
            })
        }   
    } else {
        return next({
            log: 'could not delete event',
            message: {err: 'an error occurred while deleting event'}
        })
    }
};


eventController.findAllEvents = async (req, res, next) => {
    // SELECT * FROM
    try {
        const result = await db.query('SELECT * FROM events');
        res.locals.events = result.rows;
        return next();
    }
    catch(err) {
        return next({
            log: 'DB error, could not find events',
            message: {err: 'an error occurred while querying events'}
        })
    }
}

eventController.addUserEvent = async (req, res, next) => {
    // INSERT (fields include foreign keys user_id, event_id)
    const {userId, eventId} = req.body;
    if (userId && eventId) {
        const query = {
            text: 'INSERT INTO user_events(user_id, event_id) VALUES($1, $2) RETURNING *',
            values: [userId, eventId],
        };
        try {
            const result = await db.query(query);
            res.locals.userEvent = result.rows[0];
            return next();
        }
        catch(err) {
            return next({
                log: 'DB error, could not add user event',
            message: {err: 'an error occurred while trying to add user event'}
            });
        }
    } else {
        return next({
            log: 'could not add user event due to missing field(s)',
            message: {err: 'an error occurred while trying to add user event'}
        });
    }
    
};

eventController.deleteUserEvent = async (req, res, next) => {
    // DELETE FROM user_events WHERE user_id & event_id
    const id = req.params.id;
    if (id) {
        const query = {
            text: 'DELETE FROM user_events WHERE id = $1 RETURNING *',
            values: [id],
        };
        try {
            const result = await db.query(query);
            if (result.rows.length === 0) {
                return next({
                    log: 'DB error, could not find user event',
                    message: {err: 'an error occurred while trying to delet user event'}
                });
            }
            res.locals.event = result.rows[0];
            return next();
        }
        catch(err) {
            return next({
                log: 'DB error, could not delete event',
                message: {err: 'an error occurred while deleting event'}
            })
        }
    } else {
        return next({
            log: 'could not delete user event',
            message: {err: 'an error occurred while trying to delete user event'}
        })
    }
};


module.exports = eventController;