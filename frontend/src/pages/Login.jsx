import { Link } from 'react-router-dom';
import './pages.css';
import { Button, Form, Input } from 'antd';
function Login() {
	const onFinishHandler = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailedHandler = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<div className='form_container'>
				<Form
					layout='vertical'
					name='basic'
					initialValues={{
						remember: true,
					}}
					onFinish={onFinishHandler}
					onFinishFailed={onFinishFailedHandler}
					autoComplete='off'
					className='register_form'
				>
					<h1 className='text-center'>Login</h1>

					<Form.Item
						label='Email'
						name='email'
						rules={[
							{
								required: true,
								message: 'Please input your email!',
							},
						]}
					>
						<Input type='email' />
					</Form.Item>

					<Form.Item
						label='Password'
						name='password'
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Login
						</Button>
					</Form.Item>
					<p>
						{`Don't have account? `}
						<Link to='/register'>Register</Link>
					</p>
				</Form>
			</div>
		</>
	);
}

export default Login;
