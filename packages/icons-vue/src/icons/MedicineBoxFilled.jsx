// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MedicineBoxFilledSvg from '@whalue-design/icons-svg/lib/asn/MedicineBoxFilled';

export default {
  name: 'IconMedicineBoxFilled',
  displayName: 'MedicineBoxFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MedicineBoxFilledSvg } },
      children,
    ),
};