import Private from "../components/Private/Private.jsx";
import LayoutDefault from "../Layout/LayoutDefault/LayoutDefault.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Logout from "../pages/Logout/Logout.jsx";
import Register from "../pages/Register/Register.jsx";
import Topic from "../pages/Topic/Topic.jsx";
import Answers from "../pages/Answers/Answers.jsx";
import PrivateLogin from "../components/PrivateLogin/PrivateLogin.jsx";
import TopicDetail from "../pages/TopicDetail/TopicDetail.jsx";
import TopicAll from "../pages/Topic/TopicAll.jsx";
import AnswerUserId from "../pages/Answers/AnswerUserId.jsx";
import AnswersAll from "../pages/Answers/AnswersAll.jsx";

export const routes = [
  {
    path: '/',
    element: <LayoutDefault/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        element: <PrivateLogin/>,
        children: [
          {
            path: 'login',
            element: <Login/>
          },
          {
            path: 'register',
            element: <Register/>
          }
        ]
      },
      {
        path: 'logout',
        element: <Logout/>
      },
      {
        element: <Private/>,
        children: [
          {
            path: 'topics',
            element: <Topic/>,
            children: [
              {
                index: true,
                element: <TopicAll/>,
              },
              {
                path: ':id',
                element: <TopicDetail/>
              }
            ]
          },
          {
            path: 'answers',
            element: <Answers/>,
            children: [
              {
                index: true,
                element: <AnswersAll/>,
              },
              {
                path: ':id',
                element: <AnswerUserId/>,
              }
            ]
          }
        ]
      }
    ]
  }
]