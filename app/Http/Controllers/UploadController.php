<?php

namespace App\Http\Controllers;
use App\Upload;
use http\Params;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class UploadController extends Controller
{

    public function index()
    {
        $arquivos = Upload::all();
        return response()->json($arquivos);
    }
    public function store(Request $request)
    {
        $request->file('onfile')->store('arquivos');

        $arquivo = new Upload;
        $arquivo->name    = $request->file('onfile')->getClientOriginalName();
        $arquivo->path    = $request->file('onfile')->hashName();
        $arquivo->save();
        return response()->json(['message' => 'Arquivo enviado com sucesso']);

    }
    public function destroy($id)
    {
        $arquivo = Upload::findOrFail($id);
        Storage::disk('public')->delete('arquivos/'.$arquivo->path);
        $arquivo->delete();
        return response()->json(['message' => 'Arquivo deletado com sucesso']);
    }
}
