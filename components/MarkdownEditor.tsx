import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdAddCircle } from 'react-icons/io'

export const MarkdownEditor: React.VFC = () => {
	const [message, setMessage] = useState<string>('')
	return (
		<section className="bg-navy">
			<div className="flex flex-col justify-center md:flex-row">
				<div className="flex flex-1 max-w-5xl px-4 py-6 m-3 rounded-lg bg-navy-light">
					<IoMdAddCircle size={35} className="text-gray" />
					<TextareaAutosize
						className="w-full pt-1 ml-3 text-xl outline-none bg-navy-light text-while placeholder-gray-light"
						placeholder="Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<div className="flex-1 max-w-5xl m-3">
					<div className="flex p-4 rounded-lg bg-navy-light text-while ">
						<FaUserCircle size={40} className="text-gray min-w-[40px]" />
						<div className="ml-3">
							<h4 className="text-xl font-light">
								you
								<span className="ml-2 text-sm text-gray-light">Today at 11:30 PM</span>
							</h4>
							<p className="text-xl whitespace-pre-line">{message}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}