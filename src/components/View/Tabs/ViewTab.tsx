import { colours } from "../../../data/typeColors"
import { useAppSelector } from "../../../hooks/useAppSelector"
import { PokemonDetailed } from "../../../redux/api/types"
import PokemonCaracteristic from "../../Shared/PokemonCaracteristic"
import { Tab, Tabs } from "../../Shared/Tab"
import PokemonSizeComparator from "../PokemonSizeComparator"
import ProgressBar from "./ProgressBar"

type Props = {
  pokemonDetailed: PokemonDetailed
}

const ViewTab = ({ pokemonDetailed }: Props) => {
  return (
    <Tabs
      colorSchema={{
        titleSection: {
          active: {
            backgroundColor: colours[pokemonDetailed.info.type[0]].background,
            outline: colours[pokemonDetailed.info.type[0]].type,
          },
        },
      }}
      style={{
        backgroundColor: "white",
        height: "50%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tab title="Details">
        <p style={{ padding: "10px 0px" }}>
          {pokemonDetailed.speciesInfo.description.replaceAll("", "")}
        </p>
        <PokemonCaracteristic
          label="Is Baby"
          value={pokemonDetailed.speciesInfo.isBaby.toString()}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Is Mythical"
          value={pokemonDetailed.speciesInfo.isMythical.toString()}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Is Legendary"
          value={pokemonDetailed.speciesInfo.isLegendary.toString()}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Shape"
          value={pokemonDetailed.speciesInfo.shape}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Category"
          value={pokemonDetailed.speciesInfo.category}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Capture Rate"
          value={pokemonDetailed.speciesInfo.captureRate}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Habitat"
          value={pokemonDetailed.speciesInfo.habitat}
        ></PokemonCaracteristic>
      </Tab>
      <Tab title="Base Stats">
        <ProgressBar
          value={pokemonDetailed.info.baseStats.hp}
          label={"HP"}
          color={colours[pokemonDetailed.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={pokemonDetailed.info.baseStats.attack}
          label={"Attack"}
          color={colours[pokemonDetailed.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={pokemonDetailed.info.baseStats.defense}
          label={"Defense"}
          color={colours[pokemonDetailed.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={pokemonDetailed.info.baseStats.specialAttack}
          label={"Special Attack"}
          color={colours[pokemonDetailed.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={pokemonDetailed.info.baseStats.specialDefense}
          label={"Special Defense"}
          color={colours[pokemonDetailed.info.type[0]].type}
        ></ProgressBar>
        <ProgressBar
          value={pokemonDetailed.info.baseStats.speed}
          label={"Speed"}
          color={colours[pokemonDetailed.info.type[0]].type}
        ></ProgressBar>
      </Tab>

      <Tab title="Breeding">
        <PokemonCaracteristic
          label="Hatch Counter"
          value={pokemonDetailed.speciesInfo?.hatchCounter}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Egg Groups"
          value={(pokemonDetailed.speciesInfo?.eggGroup || []).join(", ")}
        ></PokemonCaracteristic>
        <PokemonCaracteristic
          label="Growth Rate"
          value={pokemonDetailed.speciesInfo?.growthRate}
        ></PokemonCaracteristic>
      </Tab>
      <Tab title="Size">
        <PokemonSizeComparator
          pokemonSize={pokemonDetailed.info.height}
          pokemonImage={pokemonDetailed.info.image.dreamWorld}
        ></PokemonSizeComparator>
      </Tab>
    </Tabs>
  )
}

export default ViewTab
