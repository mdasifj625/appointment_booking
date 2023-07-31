import { Link } from 'react-router-dom';
import './pages.css';
import { Button, Form, Input } from 'antd';

// https://www.youtube.com/watch?v=kN8ASF6IRhE&t=13s
// 40 minutes complete
// https://ant.design/components/form
function Register() {
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
					<h1 className='text-center'>Register</h1>
					<Form.Item
						label='Name'
						name='name'
						rules={[
							{
								required: true,
								message: 'Please input your name!',
							},
						]}
					>
						<Input />
					</Form.Item>

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
							Submit
						</Button>
					</Form.Item>
					<p>
						Already have an account? <Link to='/login'>Login</Link>
					</p>
				</Form>
			</div>
		</>
	);
}

export default Register;
