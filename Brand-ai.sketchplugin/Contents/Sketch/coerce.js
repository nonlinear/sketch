function coerceJS(value) {
	if (value) {
		if (value.class) {
			switch (coerceString(value.class())) {
				case '__NSCFString':
				case '__NSCFConstantString':
				case 'NSTaggedPointerString':
				case 'NSPathStore2':
					return coerceString(value);
				case '__NSCFDictionary':
				case '__NSDictionaryI':
					return coerceObject(value);
				case '__NSCFArrayI':
					return coerceArray(value);
				case '__NSCFNumber':
					return coerceNumber(value);
				default: return value;
			}
		} else if (Array.isArray(value)) {
			return value.map(coerceJS);
		} else if (typeof value === 'object') {
			const newObj = {};
			for (var key in value) {
				newObj[key] = coerceJS(value[key]);
			}
			return newObj;
		}
	}

	return value;
}


function coerceString(str) {
	if (str) {
		return '' + str;
	} else {
		return null;
	}
}

function coerceNumber(number) {
	return number + 0;
}

function coerceBool(number) {
	return !!(number + 0);
}

function coerceArray(array) {
	var result = [];
	$.forEach(array, function(item) {
		result.push(coerceJS(item));
	});
	return result;
}

function coerceObject(dict) {
	var result = {};
	$.forEach(dict.allKeys(), function(key) {
		result[key] = coerceJS(dict[key]);
	});
	return result;
}
