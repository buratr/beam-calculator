const profiles = [
	{
		id: 0,
		displayName: 'H-Profile',
		name: 'hProfile',
		dimensions: [
			{h: 101.6, b: 101.6, t: 6.35, a: 1851, weight: 3.33, moment: 1111847.3563},
			{h: 152.4, b: 152.4, t: 6.35, a: 2822, weight: 5.08, moment: 3749063.6544},
			{h: 152.4, b: 152.4, t: 9.53, a: 4181, weight: 7.53, moment: 5631691.3222},
			{h: 203.2, b: 203.2, t: 9.53, a: 5632, weight: 10.14, moment: 13339678.8863},
			{h: 254, b: 254, t: 12.7, a: 9354, weight: 16.8, moment: 34724973.8295}
		],
		eModulus:[
			{value: 17000},
			{value: 24000}
		]
	},
	{
		id: 1,
		displayName: 'I-Profile',
		name: 'iProfile',
		dimensions: [
			{h: 112, b: 102, t: 10, a: 2960, weight: 5.33, moment: 5971946.6667},
			{h: 120, b: 70, t: 8, a: 1952, weight: 3.51, moment: 4268202.6667},
			{h: 152.4, b: 76.2, t: 9.53, a: 2729, weight: 9.28, moment: 9305138.7602},
			{h: 203.2, b: 101.6, t: 9.53, a: 3697, weight: 6.65, moment: 23131778.2305},
			{h: 304.8, b: 152.4, t: 12.7, a: 7426, weight: 13.37, moment: 105705439.1263}
		],
		eModulus:[
			{value: 17000},
			{value: 24000}
		]
	},
	{
		id: 2,
		displayName: 'C-Profile',
		name: 'cProfile',
		dimensions: [
			{h: 40, b: 60, t: 4, a: 608, weight: 1.04},
			{h: 76.2, b: 25.4, t: 4.8, a: 561, weight: 1.01},
			{h: 88.9, b: 38.1, t: 4.8, a: 716, weight: 1.29},
			{h: 101.6, b: 28.6, t: 6.35, a: 890, weight: 1.6},
			{h: 101.6, b: 35, t: 4.8, a: 748, weight: 1.35},
			{h: 101.6, b: 50.8, t: 6.35, a: 1210, weight: 2.18},
			{h: 139.7, b: 38.1, t: 4.76, a: 958, weight: 1.72},
			{h: 139.7, b: 38.1, t: 6.35, a: 1290, weight: 2.32},
			{h: 152.4, b: 41.3, t: 6.35, a: 1374, weight: 2.47},
			{h: 152.4, b: 152.4, t: 6.35, a: 2823, weight: 5.08},
			{h: 200, b: 80, t: 8, a: 2752, weight: 4.95},
			{h: 203.2, b: 55.6, t: 6.35, a: 1916, weight: 3.45},
			{h: 203.2, b: 55.6, t: 9.53, a: 2813, weight: 5.06},
			{h: 254, b: 50, t: 6, a: 2052, weight: 3.69},
			{h: 254, b: 70, t: 12.7, a: 4681, weight: 8.42}
		],
		eModulus:[
			{value: 17000},
			{value: 24000}
		]
	},
	{
		id: 3,
		displayName: 'Tube',
		name: 'tube',
		dimensions: [
			{h: 15.8, t: 3, a: 154, weight: 0.28, moment: 0.004},
			{h: 25.4, t: 6.35, a: 484, weight: 0.87, moment: 0.033},
			{h: 38.1, t: 3.175, a: 348, weight: 0.66, moment: 0.054},
			{h: 38.1, t: 6.35, a: 632, weight: 1.2, moment: 0.083},
			{h: 48.3, t: 4.95, a: 674, weight: 1.28, moment: 0.16},
			{h: 75, t: 5, a: 1100, weight: 2.09, moment: 0.677},
			{h: 90, t: 6, a: 2016, weight: 3.63, moment: 2.38},
			{h: 110, t: 8, a: 3264, weight: 5.88, moment: 5.69}
		],
		eModulus:[
			{value: 17000},
			{value: 23000}
		]
	},
	{
		id: 4,
		displayName: 'Angle',
		name: 'angle',
		dimensions: [
			{h: 25.4, b: 25.4, t: 4, a: 282, weight: 0.51, moment: 0.015},
			{h: 45, b: 45, t: 2, a: 176, weight: 0.32, moment: 0.035},
			{h: 50.8, b: 50.8, t: 6.35, a: 594, weight: 1.07, moment: 0.142},
			{h: 63.5, b: 63.5, t: 6.35, a: 766, weight: 1.38, moment: 0.29},
			{h: 76.2, b: 40, t: 5, a: 556, weight: 1, moment: 0.36},
			{h: 76.2, b: 76.2, t: 6.35, a: 916, weight: 1.65, moment: 0.491},
			{h: 76.2, b: 76.2, t: 9.53, a: 1348, weight: 2.43, moment: 0.708},
			{h: 101.6, b: 101.6, t: 6.35, a: 1239, weight: 2.23, moment: 1.122},
			{h: 101.6, b: 101.6, t: 9.53, a: 1832, weight: 3.3, moment: 1.177},
			{h: 101.6, b: 101.6, t: 12.7, a: 2419, weight: 4.35, moment: 3.67},
			{h: 152.4, b: 152.4, t: 6.35, a: 1895, weight: 3.41, moment: 7.04},
			{h: 152.4, b: 152.4, t: 9.53, a: 2800, weight: 5.04, moment: 6.18},
			{h: 152.4, b: 152.4, t: 12.7, a: 3709, weight: 6.69, moment: 13.2},
			{h: 203.2, b: 203.2, t: 9.53, a: 3782, weight: 6.81, moment: 15.54}
		],
		eModulus:[
			{value: 17000},
			{value: 24000}
		]
	},
	{
		id: 5,
		displayName: 'Square Tube',
		name: 'square',
		dimensions: [
			{h: 25.4, b: 25.4, t: 3.175, a: 277, weight: 0.5},
			{h: 38.1, b: 38.1, t: 3.2, a: 439, weight: 0.79},
			{h: 38.1, b: 38.1, t: 5.6, a: 728, weight: 1.31},
			{h: 50.8, b: 50.8, t: 3.2, a: 600, weight: 1.08},
			{h: 50.8, b: 50.8, t: 4, a: 749, weight: 1.35},
			{h: 50.8, b: 50.8, t: 6.35, a: 1123, weight: 2.02},
			{h: 60.4, b: 60.4, t: 4.5, a: 1006, weight: 1.81},
			{h: 63.5, b: 63.5, t: 6.35, a: 1452, weight: 2.61},
			{h: 76.2, b: 76.2, t: 6.35, a: 1768, weight: 3.18},
			{h: 101.6, b: 101.6, t: 6.35, a: 2413, weight: 4.34},
			{h: 101.6, b: 101.6, t: 10, a: 3535, weight: 6.36}
		],
		eModulus:[
			{value: 17000},
			{value: 23000}
		]
	}
]

export default profiles
