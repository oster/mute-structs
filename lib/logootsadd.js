/*
 *  Copyright 2014 Matthieu Nicolas
 *
 *  This file is part of Mute-structs.
 *
 *  Mute-structs is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Mute-structs is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Mute-structs.  If not, see <http://www.gnu.org/licenses/>.
 */
var LogootSAdd = function (id, l) {
	this.id = id || null;
	this.l = l || '';
};

LogootSAdd.prototype.copy = function () {
	var o = new LogootSAdd();
	o.id = this.id.copy();
	o.l = this.l;
	return o;
};

LogootSAdd.prototype.execute = function (doc) {
	var args = {
		'id': this.id,
		'str': this.l
	};
	return doc.addBlock(args);
};

module.exports = LogootSAdd;
