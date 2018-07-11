'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _lottery = require('../ethereum/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Ethereum\\Worldpay\\lottery-contract\\components\\PickWinnerForm.js';


var PickWinnerForm = function (_Component) {
    (0, _inherits3.default)(PickWinnerForm, _Component);

    function PickWinnerForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PickWinnerForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PickWinnerForm.__proto__ || (0, _getPrototypeOf2.default)(PickWinnerForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errroMessage: '',
            loading: false,
            lotteryAddress: _this.props.lotteryAddress
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var lottery, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                lottery = (0, _lottery2.default)(_this.state.lotteryAddress, _web2.default);

                                _this.setState({ loading: true, errroMessage: '' });
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return lottery.methods.playTheLottery().send({
                                    from: accounts[0]
                                });

                            case 9:
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errroMessage: _context.t0.message.split("\n")[0] });

                            case 14:
                                _this.setState({ loading: false, value: '' });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PickWinnerForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { positive: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Pick Winner'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errroMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }));
        }
    }]);

    return PickWinnerForm;
}(_react.Component);

exports.default = PickWinnerForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBpY2tXaW5uZXJGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIk1lc3NhZ2UiLCJCdXR0b24iLCJsb3R0ZXJ5QXQiLCJ3ZWIzIiwiUm91dGVyIiwiUGlja1dpbm5lckZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJycm9NZXNzYWdlIiwibG9hZGluZyIsImxvdHRlcnlBZGRyZXNzIiwicHJvcHMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb3R0ZXJ5Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInBsYXlUaGVMb3R0ZXJ5Iiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVM7O0FBQ3hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OztnTyxBQUNGO21CQUFRLEFBQ0csQUFDUDswQkFGSSxBQUVTLEFBQ2I7cUJBSEksQUFHSyxBQUNUOzRCQUFnQixNQUFBLEFBQUssTUFKakIsQSxBQUl1QjtBQUp2QixBQUNKLGlCLEFBTUo7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzZCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDQTtBQUZDLDBDQUVTLHVCQUFVLE1BQUEsQUFBSyxNQUZ4QixBQUVTLEFBQXFCLEFBQWdCLEFBQ3JEOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh4QixBQUdQLEFBQWMsQUFBK0I7Z0RBSHRDO2dEQUFBO3VDQUtvQixjQUFBLEFBQUssSUFMekIsQUFLb0IsQUFBUzs7aUNBQTFCO0FBTEgsb0RBQUE7Z0RBQUE7K0NBTUcsQUFBUSxRQUFSLEFBQWdCLGlCQUFoQixBQUFpQzswQ0FDN0IsU0FQUCxBQU1HLEFBQXNDLEFBQ2xDLEFBQVM7QUFEeUIsQUFDeEMsaUNBREU7O2lDQU5IO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVdIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBQUEsQUFBSSxRQUFKLEFBQVksTUFBWixBQUFrQixNQVg3QyxBQVdILEFBQWMsQUFBZ0IsQUFBd0I7O2lDQUUxRDtzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsT0FBTyxPQWJ6QixBQWFQLEFBQWMsQUFBd0I7O2lDQWIvQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWlCRixBQUNMO21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLFNBQVMsS0FBQSxBQUFLLE1BQS9CLEFBQXFDOzhCQUFyQztnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLGdDQUFBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBSFIsQUFDSSxBQUVJLEFBR1g7QUFIVzs7Ozs7O0FBN0JhLEEsQUFrQzdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBpY2tXaW5uZXJGb3JtLmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==