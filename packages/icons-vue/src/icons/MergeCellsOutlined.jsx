// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MergeCellsOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MergeCellsOutlined';

export default {
  name: 'IconMergeCellsOutlined',
  displayName: 'MergeCellsOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MergeCellsOutlinedSvg } },
      children,
    ),
};