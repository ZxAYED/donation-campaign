import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b5a39796"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=b5a39796"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useState = __vite__cjsImport1_react["useState"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b5a39796"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/index.css?t=1695822689173";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=b5a39796";
import ErrorPage from "/src/assets/components/ErrorPage/ErrorPage.jsx?t=1695819682148";
import Root from "/src/assets/components/Root/Root.jsx";
import Home from "/src/assets/components/Home/Home.jsx?t=1695824721089";
import Donation from "/src/assets/components/Donation/Donation.jsx?t=1695819645015";
import Statistics from "/src/assets/components/Statistics/Statistics.jsx";
import SingleCard from "/src/assets/components/Home/SingleCard.jsx";
const router = createBrowserRouter([{
  path: "/",
  element: /* @__PURE__ */ jsxDEV(Root, {}, void 0, false, {
    fileName: "C:/projects/Project-odin/src/main.jsx",
    lineNumber: 13,
    columnNumber: 12
  }, this),
  errorElement: /* @__PURE__ */ jsxDEV(ErrorPage, {}, void 0, false, {
    fileName: "C:/projects/Project-odin/src/main.jsx",
    lineNumber: 14,
    columnNumber: 17
  }, this),
  children: [{
    path: "/",
    element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
      fileName: "C:/projects/Project-odin/src/main.jsx",
      lineNumber: 17,
      columnNumber: 14
    }, this),
    loader: () => fetch(" /api.json")
  }, {
    path: "/Donation",
    element: /* @__PURE__ */ jsxDEV(Donation, {}, void 0, false, {
      fileName: "C:/projects/Project-odin/src/main.jsx",
      lineNumber: 21,
      columnNumber: 14
    }, this)
  }, {
    path: "/Statistics",
    element: /* @__PURE__ */ jsxDEV(Statistics, {}, void 0, false, {
      fileName: "C:/projects/Project-odin/src/main.jsx",
      lineNumber: 24,
      columnNumber: 14
    }, this)
  }, {
    path: "/Home/:id",
    element: /* @__PURE__ */ jsxDEV(SingleCard, {}, void 0, false, {
      fileName: "C:/projects/Project-odin/src/main.jsx",
      lineNumber: 27,
      columnNumber: 14
    }, this)
  }]
}]);
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
  fileName: "C:/projects/Project-odin/src/main.jsx",
  lineNumber: 31,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/projects/Project-odin/src/main.jsx",
  lineNumber: 30,
  columnNumber: 61
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JhO0FBbEJiLE9BQU9BLFNBQVNDLGdCQUFnQjtBQUNoQyxPQUFPQyxjQUFjO0FBQ3JCLE9BQU87QUFDUCxTQUNFQyxxQkFDQUMsc0JBQ0s7QUFDUCxPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxnQkFBZ0I7QUFFdkIsTUFBTUMsU0FBU1Isb0JBQW9CLENBRWpDO0FBQUEsRUFDRVMsTUFBTTtBQUFBLEVBQ05DLFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU07QUFBQSxFQUNmQyxjQUFjLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFXO0FBQUEsRUFDekJDLFVBQVUsQ0FBQztBQUFBLElBQ1RILE1BQU07QUFBQSxJQUNOQyxTQUFTLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFNO0FBQUEsSUFDZkcsUUFBUUEsTUFBTUMsTUFBTSxZQUFZO0FBQUEsRUFDbEMsR0FBRztBQUFBLElBQ0RMLE1BQU07QUFBQSxJQUNOQyxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFVO0FBQUEsRUFDckIsR0FDSTtBQUFBLElBQ0ZELE1BQU07QUFBQSxJQUNOQyxTQUFTLHVCQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBWTtBQUFBLEVBQ3ZCLEdBQ0k7QUFBQSxJQUNGRCxNQUFNO0FBQUEsSUFDTkMsU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVk7QUFBQSxFQUN2QixDQUFDO0FBRUgsQ0FBQyxDQUNGO0FBRURYLFNBQVNnQixXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQyxPQUNuRCx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCLEtBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFQSxDQUNGIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0RE9NIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIlJvdXRlclByb3ZpZGVyIiwiRXJyb3JQYWdlIiwiUm9vdCIsIkhvbWUiLCJEb25hdGlvbiIsIlN0YXRpc3RpY3MiLCJTaW5nbGVDYXJkIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJjaGlsZHJlbiIsImxvYWRlciIsImZldGNoIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7XG4gIGNyZWF0ZUJyb3dzZXJSb3V0ZXIsXG4gIFJvdXRlclByb3ZpZGVyLFxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL2Fzc2V0cy9jb21wb25lbnRzL0Vycm9yUGFnZS9FcnJvclBhZ2UnO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9hc3NldHMvY29tcG9uZW50cy9Sb290L1Jvb3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9hc3NldHMvY29tcG9uZW50cy9Ib21lL0hvbWUnO1xuaW1wb3J0IERvbmF0aW9uIGZyb20gJy4vYXNzZXRzL2NvbXBvbmVudHMvRG9uYXRpb24vRG9uYXRpb24nO1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi9hc3NldHMvY29tcG9uZW50cy9TdGF0aXN0aWNzL1N0YXRpc3RpY3MnO1xuaW1wb3J0IFNpbmdsZUNhcmQgZnJvbSAnLi9hc3NldHMvY29tcG9uZW50cy9Ib21lL1NpbmdsZUNhcmQnO1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcblxuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPFJvb3Q+PC9Sb290PixcbiAgICBlcnJvckVsZW1lbnQ6IDxFcnJvclBhZ2U+PC9FcnJvclBhZ2U+LFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBlbGVtZW50OiA8SG9tZT48L0hvbWU+LFxuICAgICAgbG9hZGVyOiAoKSA9PiBmZXRjaCgnIC9hcGkuanNvbicpXG4gICAgfSwge1xuICAgICAgcGF0aDogJy9Eb25hdGlvbicsXG4gICAgICBlbGVtZW50OiA8RG9uYXRpb24+PC9Eb25hdGlvbj5cbiAgICB9XG4gICAgICAsIHtcbiAgICAgIHBhdGg6ICcvU3RhdGlzdGljcycsXG4gICAgICBlbGVtZW50OiA8U3RhdGlzdGljcz48L1N0YXRpc3RpY3M+XG4gICAgfVxuICAgICAgLCB7XG4gICAgICBwYXRoOiAnL0hvbWUvOmlkJyxcbiAgICAgIGVsZW1lbnQ6IDxTaW5nbGVDYXJkPjwvU2luZ2xlQ2FyZD5cbiAgICB9XG4gICAgXVxuICB9LFxuXSk7XG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4pXG4iXSwiZmlsZSI6IkM6L3Byb2plY3RzL1Byb2plY3Qtb2Rpbi9zcmMvbWFpbi5qc3gifQ==