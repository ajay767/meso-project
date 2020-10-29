const express = require('express');
const morgan = require('morgan');
const pug = require('pug');

const employeeRoute = require('./routes/employeeRoute');
const userRoute = require('./routes/userRoute');
const AppError = require('./utlis/appError');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.use(express.json());

//serving static file path
app.use(express.static(`${__dirname}./../public`));
app.use('*/css', express.static('public/css'));
app.use('*/src', express.static('public/src'));

app.set('view engine', 'pug');
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get('/', (req, res) => {
  res.render('home.pug');
});

app.get('/about', (req, res) => {
  res.render('about.pug');
});

app.get('/login', (req, res) => {
  res.render('login.pug');
});

app.get('/signup', (req, res) => {
  res.render('signup.pug');
});

app.get('/me', (req, res) => {
  res.render('me-user.pug', {
    userID: `2824734739id44m`,
    pageName: 'My profile'
  });
});

app.get('/doctor/:docID', (req, res) => {
  const docID = req.params.docID;
  const currDoctor = {
    name: 'Dr Vivek singh',
    experience: 4,
    category: 'Dentist',
    fee: 499,
    isVerifies: true,
    education: 'MBBS, MD Apollo hospitals',
    patientConsulted: 5786
  };
  let ratingData = [
    {
      author: 'Ajay yadav',
      displayProfile: 'DP1.png',
      ratingValue: '4.5',
      rating:
        'Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.'
    },
    {
      author: 'Anjali Tomar',
      displayProfile: 'DP2.png',
      ratingValue: '4.9',
      rating: 'Lorem ipsum dolor ,sit amet.'
    },
    {
      author: 'Ashutosh Bhadoria',
      displayProfile: 'DP3.png',
      ratingValue: '5',
      rating:
        'Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, sit.'
    },
    {
      author: 'Akshat singh',
      displayProfile: 'DP4.png',
      ratingValue: '3.4',
      rating:
        'Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, sit.'
    }
  ];

  res.render('doctor-profile.pug', {
    userID: `AIR group | ${docID}`,
    pageName: `${currDoctor.name}| ${currDoctor.category}`,
    ratingData
  });
});

app.get('/department/:department', (req, res) => {
  const departmentName = req.params.department;
  let doctorData = [
    {
      name: 'Senny kate',
      displayProfile: 'DP1.png',
      rating: '5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.',
      experience: 9,
      department: 'Ayurwed'
    },
    {
      name: 'Ajay yadav',
      displayProfile: 'DP2.png',
      rating: '3',
      description:
        'Lorem ipsum Ayurwed dolor sit amet consectetur adipisicing dolor sit amet.',
      experience: 5,
      department: 'Ayurwed'
    },
    {
      name: 'Jonas bill',
      displayProfile: 'DP3.png',
      rating: '4.9',
      description:
        'Lorem ipsum dolor sit amet consectetur rem ipsum dolor s adipisicing dolor sit amet.',
      experience: 6,
      department: 'Ayurwed'
    },
    {
      name: 'Max millian',
      displayProfile: 'DP4.png',
      rating: '5',
      description:
        'Lorem ipsum amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet.',
      experience: 10,
      department: 'Ayurwed'
    },
    {
      name: 'Aryan pandey',
      displayProfile: 'DP5.png',
      rating: '5',
      description:
        'Lorem ipsum amet consectetur adipis icing dolor sit amet consectetur adipisicing dolor sit amet.',
      experience: 13,
      department: 'Ayurwed'
    },
    {
      name: 'Guddu pandit',
      displayProfile: 'guddu.jpg',
      rating: '5',
      description:
        'Lorem ipsum amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet.',
      experience: 120,
      department: 'Ayurwed'
    },
    {
      name: 'Bablu pandit',
      displayProfile: 'bablu.jpg',
      rating: '5',
      description:
        'Lorem ipsum amet consectetur adipisicing dolor sit amet consectetur adipisicing dolor sit amet.',
      experience: 100,
      department: 'Ayurwed'
    }
  ];
  res.render('department-search.pug', {
    pageID: `AIR| best ${departmentName} doctors near you`,
    pageName: departmentName,
    doctorData
  });
});
app.get('/doctor/:drName', (req, res) => {
  const drName = req.params.drName;
  res.render('user-profile.pug', {
    userID: `2824734739id44m`,
    pageName: drName
  });
});

app.get('/notification', (req, res) => {
  res.render('notification.pug', {
    userID: `AIR health card | Notification`,
    pageName: 'Notification'
  });
});

app.get('/font-check', (req, res) => {
  res.render('font.pug');
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/employee', employeeRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
