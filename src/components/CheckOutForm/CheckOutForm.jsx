import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function CheckOutForm({ onConfirm }) {
    const { handleSubmit, register } = useForm();
    const { total } = useContext(CartContext);

    const onSubmit = (data) => {
        onConfirm({ ...data, total });
    };

    return (
    <>
    <div className="w-100vh h-[calc(100vh-88px)] flex justify-center mt-10">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)} >
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nombre
                    </label>
                    <input
                        required
                        id="grid-first-name"
                        type="text"
                        {...register("name")}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Apellido
                </label>
                <input
                    required
                    type="text"
                    {...register("lastName")}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="e-mail">
                        E-mail
                    </label>
                <input
                    required
                    id="e-mail"
                    type="email"
                    {...register("email")}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="ejemplo@ejemplo.com"
                />
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tel">
                        Telefono
                    </label>
                    <input
                        required
                        id="tel"
                        type="tel"
                        {...register("phone")}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Ciudad
                    </label>
                    <input
                        required
                        id="grid-city"
                        type="text"
                        {...register("city")}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Provincia
                    </label>
                    <input
                        required
                        id="grid-state"
                        type="text"
                        {...register("prov")}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    CP
                </label>
                <input
                    required
                    id="grid-zip"
                    type="text"
                    {...register("zip")}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                </div>

                <div className="w-full px-3 py-5">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Terminar compra
                </button>
                </div>
            </div>
            </form>
        </div>
        </>
    );
}

export default CheckOutForm;
