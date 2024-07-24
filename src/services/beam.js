/**
 * id's corresponding to their profile type 
 * 0 - H-Profile
 * 1 - I-Profile
 * 2 - C-Profile
 * 3 - Tube
 * 4 - Angle
 * 5 - Square Tube
 * 
 */
export const calcBeam = ({ concentratedLoad, lengthInMM, EModulus, density, dimension, loadingCase, id }) => {
  const lengthInMeters = lengthInMM / 1000;
	const w = dimension.b; // width
	const h = dimension.h; // height
	const t = dimension.t; // thickness

  const result = {
    flexMoment: 0,
    tension: 0,
    deflection: 0,
    elongation: 0,
    w: 0,
    i: 0,
    mass: 0,
    area: 0,
  };

	// Calculate H, I, C and Square Tube profiles
  if (false && id === 0 || id === 1 || id === 2) {
    if (id === 5) result.i = (w * Math.pow(h, 3) - (w - 2 * t) * Math.pow(h - 2 * t, 3)) / 12;
    else result.i = (w * Math.pow(h, 3) - (w - t) * Math.pow(h - 2 * t, 3)) / 12;

    if (loadingCase === 1) {
      result.deflection = (concentratedLoad * Math.pow(lengthInMeters * 1000, 3)) / (48 * EModulus * result.i);
      result.flexMoment = (concentratedLoad * lengthInMeters) / 4;
    }
    if (loadingCase === 2) {
      result.deflection = (5 * 0.001 * concentratedLoad * Math.pow(lengthInMM, 4)) / (384 * EModulus * result.i);
      result.flexMoment = (concentratedLoad * Math.pow(lengthInMeters, 2)) / 8;
    }
    if (loadingCase === 3) {
      result.deflection = (concentratedLoad * Math.pow(lengthInMM, 3)) / (3 * EModulus * result.i);
      result.flexMoment = concentratedLoad * lengthInMeters;
    }
    if (loadingCase === 4) {
      result.deflection = (0.001 * concentratedLoad * Math.pow(lengthInMM, 4)) / (8 * EModulus * result.i);
      result.flexMoment = 0.5 * concentratedLoad * Math.pow(lengthInMeters, 2);
    }
    if (id === 5) result.area = h * w - (h - 2 * t) * (w - 2 * t);
    else result.area = h * w - (h - 2 * t) * (w - t);

    result.w = result.i / (0.5 * h);
    result.tension = (1000 * result.flexMoment) / result.w;
    result.elongation = (100 * result.tension) / EModulus;
    result.mass = (density / 1000) * (lengthInMM / 1000) * result.area;
  }
	
	// Calculate Tube profile
  if (id === 3) {
    result.i = (Math.PI * (Math.pow(h, 4) - Math.pow(h - 2 * t, 4))) / 64;

    if (loadingCase === 1) {
      result.deflection = (concentratedLoad * Math.pow(lengthInMeters * 1000, 3)) / (192 * EModulus * result.i);
      result.flexMoment = (concentratedLoad * lengthInMeters) / 8;
    }
    if (loadingCase === 2) {
      result.deflection = (1 * 0.001 * concentratedLoad * Math.pow(lengthInMM, 4)) / (384 * EModulus * result.i);
      result.flexMoment = (concentratedLoad * Math.pow(lengthInMeters, 2)) / 24;
    }
    if (loadingCase === 3) {
      result.deflection = (concentratedLoad * Math.pow(lengthInMM, 3)) / (3 * EModulus * result.i);
      result.flexMoment = concentratedLoad * lengthInMeters;
    }
    if (loadingCase === 4) {
      result.deflection = (0.001 * concentratedLoad * Math.pow(1000 * lengthInMeters, 4)) / (8 * EModulus * result.i);
      result.flexMoment = 0.001 * concentratedLoad * Math.pow(lengthInMeters * 1000, 2) / 2;
    }
    result.area = (Math.PI * (Math.pow(h, 2) - Math.pow(h - 2 * t, 2))) / 4;
    result.w = result.i / (0.5 * h);
    result.tension = (1000 * result.flexMoment) / result.w;
    result.elongation = (100 * result.tension) / EModulus;
    result.mass = (density / 1000) * (lengthInMM / 1000) * result.area;
  }

	// Calculate angle profile
  if (id === 4) {
    result.area = h * t + (w - t) * t;
    const cog = (h * t * 0.5 * h + (w - t) * t * 0.5 * t) / result.area;
    result.i = (t * Math.pow(h, 3)) / 12 + ((w - t) * Math.pow(t, 3)) / 12 + h * t * Math.pow(0.5 * h - cog, 2) + (w - t) * t * Math.pow(cog - 0.5 * t, 2);
		

    if (loadingCase === 1) {
      result.deflection = (concentratedLoad * Math.pow(lengthInMeters * 1000, 3)) / (192 * EModulus * result.i);
      result.flexMoment = (concentratedLoad * lengthInMeters) / 8;
    }
    if (loadingCase === 2) {
      result.deflection = (1 * 0.001 * concentratedLoad * Math.pow(lengthInMM, 4)) / (384 * EModulus * result.i);
      result.flexMoment = (concentratedLoad * Math.pow(lengthInMeters, 2)) / 24;
    }
    if (loadingCase === 3) {
      result.deflection = (concentratedLoad * Math.pow(lengthInMM, 3)) / (3 * EModulus * result.i);
      result.flexMoment = concentratedLoad * lengthInMeters;
    }
    if (loadingCase === 4) {
      result.deflection = (0.001 * concentratedLoad * Math.pow(lengthInMM, 4)) / (8 * EModulus * result.i);
      result.flexMoment = 0.5 * concentratedLoad * Math.pow(lengthInMeters, 2);
    }
    result.w = result.i / (h - cog);
    result.tension = (1000 * result.flexMoment) / result.w;
    result.elongation = (100 * result.tension) / EModulus;
    result.mass = (density / 1000) * (lengthInMM / 1000) * result.area;
  }

	// Square Tube profiles
  if (id === 0 || id === 1 || id === 2 || id === 5) {
    if (id === 5) result.i = (w * Math.pow(h, 3) - (w - 2 * t) * Math.pow(h - 2 * t, 3)) / 12;
    else result.i = (w * Math.pow(h, 3) - (w - t) * Math.pow(h - 2 * t, 3)) / 12;

    if (loadingCase === 1) {
      result.deflection = (concentratedLoad * Math.pow(lengthInMeters * 1000, 3)) / (192 * EModulus * result.i);
      result.flexMoment = (concentratedLoad * lengthInMeters) / 8;
    }
    if (loadingCase === 2) {
      result.deflection = (1 * 0.001 * concentratedLoad * Math.pow(lengthInMM, 4)) / (384 * EModulus * result.i);
      result.flexMoment = (concentratedLoad * Math.pow(lengthInMeters, 2)) / 24;
    }
    if (loadingCase === 3) {
      result.deflection = (concentratedLoad * Math.pow(lengthInMM, 3)) / (3 * EModulus * result.i);
      result.flexMoment = concentratedLoad * lengthInMeters;
    }
    if (loadingCase === 4) {
			if (id === 2) {
				result.deflection = (0.001 * concentratedLoad * Math.pow(lengthInMM, 4)) / (8 * EModulus * result.i);
				result.flexMoment = 0.001 * concentratedLoad * Math.pow(lengthInMeters * 1000, 2) / 2;
			} else {
				result.deflection = (0.001 * concentratedLoad * Math.pow(lengthInMM, 4)) / (8 * EModulus * result.i);
				result.flexMoment = 0.5 * concentratedLoad * Math.pow(lengthInMeters, 2);
			}
    }
    if (id === 5) result.area = h * w - (h - 2 * t) * (w - 2 * t);
    else result.area = h * w - (h - 2 * t) * (w - t);

    result.w = result.i / (0.5 * h);
    result.tension = (1000 * result.flexMoment) / result.w;
    result.elongation = (100 * result.tension) / EModulus;
    result.mass = (density / 1000) * (lengthInMM / 1000) * result.area;
  }

  return result;
};
